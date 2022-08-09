create table us_profile_view
(
    id              bigint,
    gender          char DEFAULT 'u',
    social_websites hstore,
    birthday        date,
    pic             varchar(200),
    phone           varchar(15),
    email           varchar(64),
    friends_id      hstore
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
    visited    hstore
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

create table org
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
