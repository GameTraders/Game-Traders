update gt_users
set username = ${username}, email = ${email}, profile_pic = ${profile_pic}, city = ${city}, 
state = ${state}, zip = ${zip}, street = ${street}
where user_id = ${user_id};
select * from gt_users;