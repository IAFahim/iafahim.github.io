create table university
(
    university_id           serial primary key,
    university_name         varchar(50),
    university_address      varchar(200),
    university_phone        varchar(20),
    university_email        varchar(64),
    university_website      varchar(64),
    university_logo         varchar(200),
    university_description  varchar,
    university_created_date timestamptz default now() not null,
    university_created_by   bigint                    not null references profiles (id),
    university_updated_date timestamptz default now(),
    university_updated_by   bigint references profiles (id)
);