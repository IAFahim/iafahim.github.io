create table org
(
    id                   int primary key,
    joined_student_count int         default 1,
    logo_url             varchar(200),
    created_by           bigint references profiles (id),
    name                 varchar(100),
    description          varchar,
    created              timestamptz default now(),
    social_websites      hstore
);

create or replace function public.handle_new_org()
    returns trigger
    language plpgsql
    security definer set search_path = public
as
$$
begin
    insert into org_member(profiles_id, org_id, class) values (new.created_by, new.id, '"Creator"=>"0"');
    return new;
end;
$$;

create or replace trigger on_new_org_created
    after insert
    on org
    for each row
EXECUTE procedure handle_new_org();

create table org_member
(
    profiles_id bigint primary key references profiles (id),
    org_id      bigint references profiles (id),
    class       hstore
);

