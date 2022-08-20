create table org
(
    id                   serial primary key,
    created_by           bigint references profiles (id),
    logo_url             varchar(200),
    name                 varchar(100) unique,
    description          varchar,
    created              timestamptz default now() not null,
    updated              timestamptz,
    joined_student_count int         default 1,
    social_websites      varchar[]
);

alter table org add column updated timestamptz;

create or replace function public.handle_new_org()
    returns trigger
    language plpgsql
    security definer set search_path = public
as
$$
begin
    insert into org_member(org_id, profiles_id, class) values (new.id, new.created_by, '"Creator"=>"0"');
    return new;
end;
$$;

create or replace trigger on_new_org_created
    after insert
    on public.org
    for each row
EXECUTE procedure handle_new_org();

create table org_member
(
    profiles_id bigint primary key references profiles (id),
    org_id      bigint references org (id),
    class       hstore
);

