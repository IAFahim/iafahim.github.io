create table universities
(
    id             serial primary key,
    name           varchar(64) not null,
    moto           text,
    phone          varchar(20),
    email          varchar(64),
    address        varchar(200),
    created_at     timestamptz default now(),
    updated_at     timestamptz,
    links          varchar[]
);

