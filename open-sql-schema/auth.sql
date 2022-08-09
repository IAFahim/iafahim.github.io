create table auth
(
    users              uuid not null primary key,
    email              varchar,
    raw_user_meta_data jsonb,
    phone              varchar
);
