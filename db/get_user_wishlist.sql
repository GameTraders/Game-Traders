select * from wishlist w
join games g on g.game_id = w.game_id
where w.user_id = ($1)