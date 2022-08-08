CREATE EXTENSION hstore;

create table profiles
(
    id              bigserial primary key,
    name            varchar(50) unique           not null check ( length(name) > 2 and profiles.name ~* '[a-z]'),
    uuid            uuid references auth (users) not null,
    logo_url        varchar,
    email           varchar(128),
    university_id   int,
    karma           int DEFAULT 0,
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

create table profile_joining_club
(
    profiles_id bigint primary key references profiles (id),
    clubs_id    bigint references profiles (id),
    class       int default 0
);

create table club
(
    id                   bigserial primary key,
    joined_student_count int default 1,
    created_by           bigint references profiles (id),
    name                 varchar(100),
    description          varchar,
    visit                hstore,
    social_websites      hstore
);

insert into club(created_by, name, description, social_websites)
values (1, 'NSU-ACM', 'Lots of fun', '"FaceBook"=>"facebook.com"');

insert into club(created_by, name, description, social_websites)
values (3, 'NSU-YES', 'Lots of fun But YES', '"LinkedIN"=>"linkedin.com"');


select *
from profiles
         left join club c on profiles.id = c.created_by;

insert into profiles(name, uuid)
values ('IAFahim', '78da1732-300b-4dc0-9380-d05516f8d550'::uuid);
insert into profiles(name, uuid)
values ('Spondon', '0478acd4-8c5d-42e2-8b42-94e4b75f7b79'::uuid);

insert into auth(users)
values ('78da1732-300b-4dc0-9380-d05516f8d550'::uuid);

insert into auth(users)
values ('0478acd4-8c5d-42e2-8b42-94e4b75f7b79'::uuid);

create table auth
(
    users              uuid not null primary key,
    email              varchar,
    raw_user_meta_data jsonb,
    phone              varchar
);

insert into auth (users, email, raw_user_meta_data, phone)
values ('78da1732-300b-4dc0-9380-d05516f8d550', 'fahimmanowarj5@gmail.com', '{
  "iss": "https://www.googleapis.com/userinfo/v2/me",
  "sub": "109365051886332781261",
  "name": "PRO_GrAMmER PRO_GrAMmER",
  "email": "fahimmanowarj5@gmail.com",
  "picture": "https://lh3.googleusercontent.com/a-/AFdZucr_L5L-LZFBYUNm8w1IIJVATfv5NKWn6sdxS-L1=s96-c",
  "full_name": "PRO_GrAMmER PRO_GrAMmER",
  "avatar_url": "https://lh3.googleusercontent.com/a-/AFdZucr_L5L-LZFBYUNm8w1IIJVATfv5NKWn6sdxS-L1=s96-c",
  "provider_id": "109365051886332781261",
  "email_verified": true
}', null);


create table us_profile_view
(
    id              bigint,
    gender          char DEFAULT 'u',
    social_websites hstore,
    birthday        date,
    pic             varchar(200),
    phone           varchar(15),
    email           varchar(64),
    friends_id      hstore,
    foreign key (id) references users (id)
);

create table us_metaData
(
    id         bigint,
    visit      bigint DEFAULT 0,
    lat_lon    point,
    address    varchar(150),
    created_at timestamptz,
    updated_at timestamptz,
    link       varchar(200),
    mac_addr   macaddr,
    visited    hstore,
    foreign key (id) references users (id)
);

create table metadata
(
    id           bigint primary key,
    pic          varchar(200),
    phone        varchar(15),
    email        varchar(64),
    visit        bigint,
    lat_lon      point,
    address      varchar(150),
    created_at   timestamptz,
    updated_at   timestamptz,
    link         varchar(200),
    mac_addr     macaddr,
    last_visited timestamptz
);

create table universities
(
    id             serial primary key,
    name           varchar(64) not null,
    moto           text,
    students_count int,
    --Meta Data
    phone          varchar(15),
    email          varchar(64),
    visit          bigint,
    lat_lon        point,
    address        varchar(150),
    created_at     timestamptz,
    updated_at     timestamptz,
    link           varchar(200),
    mac_addr       macaddr,
    last_visited   timestamptz
);

create table clubs
(
    id     serial primary key,
    type   char,
    name   varchar,
    users  bigint[],
    role   BIT VARYING(100)[],
    rating real[],
    teams  int[]
);

create table team
(
    id    serial primary key,
    type  char,
    name  char,
    users bigint[]
);

create table task
(
    number          bigserial primary key,
    type            char,
    created_by_id   bigint,
    created_by_type char,
    title           varchar(128),
    description     text,
    submission_time timestamptz,
    status          char,
    search_text     tsvector
);


create table announcement
(
    number          bigserial primary key,
    type            char,
    created_by_id   bigint,
    created_by_type char,
    title           varchar(128),
    description     text,
    event_time      timestamptz,
    search_text     tsvector
);
