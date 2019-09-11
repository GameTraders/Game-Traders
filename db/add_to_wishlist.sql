insert into wishlist (user_id, game_id)
values ($1, $2)
returning *;