create table profiles
(
    id              bigserial primary key,
    name            varchar(50) unique           not null check ( length(name) > 2 and profiles.name ~* '[a-z]'),
    uuid            uuid references auth (users) not null,
    logo_url        varchar,
    email           varchar(128),
    university_id   int,
    karma           int DEFAULT 0,
    created         timestamptz default now(),
    social_websites hstore,
    visit_history   hstore
);

create or replace function public.handle_new_user()
    returns trigger
    language plpgsql
    security definer set search_path = public
as
$$
begin
    insert into profiles (uuid, name)
    values (new.users, new.users);
    return new;
end;
$$;

-- trigger the function every time a user is created
create or replace trigger on_auth_user_created
    after insert
    on auth
    for each row
execute procedure handle_new_user();

