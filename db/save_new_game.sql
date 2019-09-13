insert into games (game_id, game_name, background_image, released, metacritic)
values ($1, $2, $3, $4, $5)
returning *;