-- Run this in the Supabase SQL editor for your project.
-- It creates a `contact_messages` table and a public-insert RLS policy
-- so that the website's anon key can save submissions safely.

create extension if not exists "pgcrypto";

create table if not exists public.contact_messages (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  message     text not null,
  created_at  timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

-- Allow anonymous inserts from the website (anon key)
drop policy if exists "Allow anon inserts" on public.contact_messages;
create policy "Allow anon inserts"
  on public.contact_messages
  for insert
  to anon
  with check (true);

-- Only authenticated users (e.g. you, in the dashboard) can read messages
drop policy if exists "Authenticated read" on public.contact_messages;
create policy "Authenticated read"
  on public.contact_messages
  for select
  to authenticated
  using (true);
