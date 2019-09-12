SELECT  w.game_id as wishlist_id, g.game_id as gamelist_id, u.user_id FROM  gt_users u
full outer join game_list g on u.user_id = g.user_id 
full outer JOIN wishlist w on u.user_id = w.user_id
WHERE g.user_id = ($1)