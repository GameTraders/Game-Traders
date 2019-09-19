INSERT INTO gt_rooms ( user_id, trader_id, game_trade, game_id, game_name, game_points, room_id )
VALUES ( $1, $2, $3, $4, $5, $6, $7 )
RETURNING *;