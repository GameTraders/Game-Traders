select * from gt_users u
join game_list gl on gl.user_id = u.user_id
where gl.game_id = ($1)