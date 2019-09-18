SELECT
 gt_rooms.user_id, 
 trader_id, 
 game_trade, 
 game_id, 
 room_id,
 gt_users.username,
 profile_pic
FROM gt_rooms
INNER JOIN gt_users on gt_users.user_id = gt_rooms.user_id
WHERE trader_id = $1;