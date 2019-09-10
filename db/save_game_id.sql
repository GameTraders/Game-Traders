insert into game_list (user_id, game_id)
values (${user_id}, ${game_id})
returning *;