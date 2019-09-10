insert into games (game_id, name, cover_art, first_release_date, age_rating, platforms, igdb_link, total_rating, similar_games)
values (${game_id}, ${name}, ${cover_art}, ${first_release_date}, ${age_rating}, ${platforms}, ${igdb_link}, ${total_rating}, ${similar_games})
returning *;