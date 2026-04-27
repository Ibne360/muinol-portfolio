import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

/**
 * Supabase is optional during local development.
 * If env vars are missing, we export `null` and the contact form will
 * gracefully fall back to a "saved-locally" notice instead of crashing.
 */
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey, {
        auth: { persistSession: false }
      })
    : null

export const isSupabaseConfigured = Boolean(supabase)

/**
 * Insert a contact submission. Expects a table named `contact_messages`
 * with columns: id (uuid, default gen_random_uuid()), name (text),
 * email (text), message (text), created_at (timestamptz, default now()).
 *
 * SQL is provided in `supabase/schema.sql`.
 */
export async function submitContactMessage({ name, email, message }) {
  if (!supabase) {
    return {
      ok: false,
      error: 'Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file.'
    }
  }

  const { error } = await supabase
    .from('contact_messages')
    .insert([{ name, email, message }])

  if (error) return { ok: false, error: error.message }
  return { ok: true }
}
