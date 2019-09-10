select * from messages m
join chat c on c.room_id = m.room_id
where room_id = ($1)