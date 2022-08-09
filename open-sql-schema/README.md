classDiagram
direction BT
class auth {
   varchar email
   jsonb raw_user_meta_data
   varchar phone
   uuid users
}
class org {
   integer joined_student_count
   varchar(200) logo_url
   bigint created_by
   varchar(100) name
   varchar description
   timestamp with time zone created
   hstore social_websites
   integer id
}
class org_member {
   bigint org_id
   hstore class
   bigint profiles_id
}
class profiles {
   varchar(50) name
   uuid uuid
   varchar logo_url
   varchar(128) email
   integer university_id
   integer karma
   timestamp with time zone created
   hstore social_websites
   hstore visit_history
   bigint id
}
class task {
   integer created_by
   integer created_for
   timestamp with time zone created
   jsonb data_json
   bigint id
}

org  -->  profiles : created_by:id
org_member  -->  org : org_id:id
org_member  -->  profiles : org_id:id
org_member  -->  profiles : profiles_id:id
profiles  -->  auth : uuid:users
task  -->  org : created_for:id
task  -->  profiles : created_by:id
