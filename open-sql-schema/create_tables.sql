CREATE EXTENSION hstore;

create table task
(
    id         bigserial primary key,
    created_by int references org (id)

);

insert into org(created_by, name, description, social_websites)
values (1, 'NSU-ACM', 'Lots of fun', '"FaceBook"=>"facebook.com"');

insert into org(created_by, name, description, social_websites)
values (3, 'NSU-YES', 'Lots of fun But YES', '"LinkedIN"=>"linkedin.com"');


select *
from profiles
         left join org c on profiles.id = c.created_by;

insert into profiles(name, uuid)
values ('IAFahim', '78da1732-300b-4dc0-9380-d05516f8d550'::uuid);
insert into profiles(name, uuid)
values ('Spondon', '0478acd4-8c5d-42e2-8b42-94e4b75f7b79'::uuid);

insert into auth(users)
values ('78da1732-300b-4dc0-9380-d05516f8d550'::uuid);

insert into auth(users)
values ('0478acd4-8c5d-42e2-8b42-94e4b75f7b79'::uuid);


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


