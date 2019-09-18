INSERT INTO gt_rooms ( user_id, trader_id, game_trade, game_id, room_id )
VALUES ( $1, $2, $3, $4, $5 )
RETURNING *;