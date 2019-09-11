insert into games (game_id, game_name, background_image, released, platforms, genre, metacritic)
values (${game_id}, ${game_name}, ${background_image}, ${released}, ${platforms}, ${genre}, ${metacritic})
returning *;