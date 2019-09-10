select * from game_list gl
join games g on g.game_id = gl.game_id
where gl.user_id = ($1)