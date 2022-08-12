create table task
(
    id          bigserial primary key,
    created_by  int references profiles (id),
    created_for int references org (id),
    created     timestamptz default now(),
    updated     timestamptz,
    data_json   jsonb
);