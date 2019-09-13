insert into game_list (user_id, game_id, points)
values ($1, $2, $3)
returning *;