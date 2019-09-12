select * from gt_users
where email like $1
or username like $2;