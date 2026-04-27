import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

/** Table name used by the contact form. Override with VITE_SUPABASE_CONTACTS_TABLE if you want a different name. */
export const CONTACTS_TABLE =
  import.meta.env.VITE_SUPABASE_CONTACTS_TABLE || 'contacts'

/**
 * Supabase is optional during local development.
 * If env vars are missing, we export `null` and the contact form will
 * show a helpful notice instead of crashing.
 */
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey, {
        auth: { persistSession: false }
      })
    : null

export const isSupabaseConfigured = Boolean(supabase)

/** Light client-side validation. Server-side enforcement comes from RLS / column constraints. */
function validate({ name, email, message }) {
  if (!name?.trim() || name.trim().length < 2) return 'Please enter your name.'
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return 'Please enter a valid email address.'
  if (!message?.trim() || message.trim().length < 5)
    return 'Please write a slightly longer message.'
  return null
}

/**
 * Insert a contact submission into the `contacts` table.
 * Expected columns: id (uuid, default gen_random_uuid()),
 * name (text), email (text), message (text), created_at (timestamptz default now()).
 * SQL is provided in `supabase/schema.sql`.
 */
export async function submitContactMessage({ name, email, message }) {
  if (!supabase) {
    return {
      ok: false,
      error:
        'Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file.'
    }
  }

  const validationError = validate({ name, email, message })
  if (validationError) return { ok: false, error: validationError }

  const payload = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    message: message.trim()
  }

  const { data, error } = await supabase
    .from(CONTACTS_TABLE)
    .insert([payload])
    .select('id')
    .single()

  if (error) {
    // Common dev errors get a friendlier message
    if (/relation .* does not exist/i.test(error.message)) {
      return {
        ok: false,
        error: `Table "${CONTACTS_TABLE}" not found in Supabase. Run supabase/schema.sql in your project's SQL Editor.`
      }
    }
    if (/row-level security/i.test(error.message)) {
      return {
        ok: false,
        error:
          'Blocked by Row Level Security. Apply the policies from supabase/schema.sql so anonymous inserts are allowed.'
      }
    }
    return { ok: false, error: error.message }
  }

  return { ok: true, id: data?.id }
}
