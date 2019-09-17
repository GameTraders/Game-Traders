update gt_users
set user_points = ${user_points}
where user_id = ${user_id}
returning *;