-- =================================================================
-- Muinol Islam Portfolio — contact form schema
-- Run this in: Supabase Dashboard → SQL Editor → New query → Run
-- It creates a `contacts` table and the RLS policies needed so the
-- website (using the public anon key) can save submissions safely.
-- =================================================================

create extension if not exists "pgcrypto";

-- Main table
create table if not exists public.contacts (
  id          uuid primary key default gen_random_uuid(),
  name        text not null check (char_length(trim(name)) between 2 and 120),
  email       text not null check (email ~* '^[^\s@]+@[^\s@]+\.[^\s@]+$'),
  message     text not null check (char_length(trim(message)) between 5 and 5000),
  created_at  timestamptz not null default now()
);

-- Useful index for sorting newest first in the dashboard
create index if not exists contacts_created_at_idx
  on public.contacts (created_at desc);

-- Lock down by default
alter table public.contacts enable row level security;

-- Allow anonymous INSERTs from the website (uses the anon key)
drop policy if exists "Allow anon inserts" on public.contacts;
create policy "Allow anon inserts"
  on public.contacts
  for insert
  to anon
  with check (true);

-- Only authenticated users (i.e. you, signed into the Supabase dashboard)
-- may SELECT submissions. Anon users cannot read messages.
drop policy if exists "Authenticated read" on public.contacts;
create policy "Authenticated read"
  on public.contacts
  for select
  to authenticated
  using (true);
