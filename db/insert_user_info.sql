insert into gt_users (username, email, hash, street, city, state, zip, profile_pic)
values (${username}, ${email}, ${hash}, ${street}, ${city}, ${state}, ${zip}, ${profile_pic})
returning *;