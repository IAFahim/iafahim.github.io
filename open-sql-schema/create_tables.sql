CREATE EXTENSION hstore;

create table users
(
    id              bigserial primary key,
    userName        varchar(30) unique not null check ( length(userName) > 2 and users.userName ~* '[a-z]'),
    user_id         uuid,
    logo_url        varchar,
    email           varchar(128),
    university_id   int,
    karma           int DEFAULT 0,
    social_websites hstore,
    visit_history   hstore
);

insert into users(userName)values ('wht 2 wiie');
insert into users(userName)values ('fahim2');

create table auth
(
    id                 uuid not null primary key,
    email              varchar,
    raw_user_meta_data jsonb,
    phone              varchar
);

insert into auth (id, email, raw_user_meta_data, phone)
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
