-- Execute no SQL Editor do Supabase
create table if not exists public.app_state (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.app_state enable row level security;
drop policy if exists "read own finance state" on public.app_state;
drop policy if exists "insert own finance state" on public.app_state;
drop policy if exists "update own finance state" on public.app_state;
create policy "read own finance state" on public.app_state for select to authenticated using (auth.uid() = user_id);
create policy "insert own finance state" on public.app_state for insert to authenticated with check (auth.uid() = user_id);
create policy "update own finance state" on public.app_state for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
