SELECT * FROM games g
INNER JOIN game_list gl ON gl.game_id = g.game_id
WHERE g.game_id = ($1)