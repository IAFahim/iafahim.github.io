create table profiles
(
    id              bigserial primary key,
    name            varchar(50) unique                                            not null,
    uuid            uuid references auth.users                                    not null,
    logo_url        varchar,
    university_id   int,
    karma           int                      DEFAULT 0,
    created         timestamptz default now() not null,
    updated         timestamptz,
    social_websites hstore,
    visit_history   hstore
);

alter table public.profiles
    enable row level security;

create policy "Public profiles are viewable by everyone."
    on profiles for select
    using (true);

create policy "Users can insert their own profile."
    on profiles for insert
    with check (auth.uid() = uuid);

create policy "Users can update own profile."
    on profiles for update
    using (auth.uid() = uuid);


create or replace function public.handle_new_profile()
    returns trigger
    language plpgsql
    security definer set search_path = public
as
$$

begin
    insert into public.profiles (uuid, name)
    values (new.users, new.users);
    return new;
end;

$$;

-- trigger the function every time a user is created

create or replace trigger on_new_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_profile();

