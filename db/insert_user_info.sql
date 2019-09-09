insert into gt_users (username, email, hash, shipping_address, profile_pic)
values (${username}, ${email}, ${hash}, ${shipping_address}, ${profile_pic})
returning *;