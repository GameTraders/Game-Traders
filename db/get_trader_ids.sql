select gt.user_id, gt.username, gt.profile_pic, gt.user_rating from gt_users gt
full outer join game_list g on gt.user_id = g.user_id
full outer join games ga on g.game_id = ga.game_id
where g.game_id = ($1);