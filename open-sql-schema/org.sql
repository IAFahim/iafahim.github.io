create table org
(
    id              serial primary key,
    created_by      bigint,
    logo_url        varchar(200),
    name            varchar(100) unique,
    description     varchar,
    created         timestamptz default now() not null,
    updated         timestamptz,
    social_websites varchar[]
);


create or replace function public.handle_new_org()
    returns trigger
    language plpgsql
    security definer set search_path = public
as
$$
begin
    insert into org_member(org_id, profiles_id, status)
    values (new.id, new.created_by, 'admin');
    return new;
end
$$;

create or replace trigger on_new_org_created
    after insert
    on public.org
    for each row
EXECUTE procedure handle_new_org();

create table org_member
(
    org_id      bigint primary key references org (id),
    profiles_id bigint references profiles (id),
    status      varchar(20) default 'pending' not null
);

