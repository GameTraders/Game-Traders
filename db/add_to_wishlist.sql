insert into wishlist (user_id, game_id)
values (${user_id}, ${game_id})
returning *;