DROP TABLE wishlist;
DROP TABLE game_list;
DROP TABLE games;


create table gt_users (
username Varchar,
user_id serial primary key,
email varchar(100),
hash text,
profile_pic text,
user_points int,
user_rating int,
street text,
city varchar,
state varchar(30),
zip int);

create table games (
game_id int unique,
game_name varchar,
background_image text,
released varchar,
genre varchar,
platforms varchar,
metacritic INT,
id serial primary key);

create table game_list (
user_id int references gt_users(user_id),
game_id int references games(game_id),
points int,
id serial primary key);

create table chat (
room_id varchar unique,
user_id int references gt_users(user_id),
id serial primary key);

create table wishlist(
user_id int references gt_users(user_id),
game_id int references games(game_id),
id serial primary key);

CREATE TABLE messages (
room_id VARCHAR REFERENCES chat(room_id),
message_id INT,
user_id INT,
id SERIAL PRIMARY KEY
);

insert into games (game_id, game_name, background_image, released, genre, platforms, metacritic)
values (1234, 'Halo Reach', 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Halo-_Reach_box_art.png/220px-Halo-_Reach_box_art.png', '11-06-08', 'FPS', 'Xbox One', 88),
(8888, 'Call of Duty: Black Ops 4', 'https://images-na.ssl-images-amazon.com/images/I/817f1bj7kkL._AC_UL320_SR240,320_.jpg', '12-04-16', 'FPS', 'Xbox One', 92),
(6666, 'Borderlands 3', 'https://media.gamestop.com/i/gamestop/10175066/Borderlands-3?$zoom$', '08-13-17', 'strategy', 'Playstation 4', 85),
(3333, 'Far Cry 4', 'http://smhttp.37594.nexcesscdn.net/8012676/gameonephcdn/pub/media/catalog/product/cache/image/620x678/e9c3970ab036de70892d86c6d221abfe/f/a/far-cry-4-ph-ps4.jpg', '09-17-2016', 'war', 'Playstation 4', 91)

insert into game_list (user_id, game_id, points)
values (7, 1234, 55), (7, 3333, 40)

DROP TABLE IF EXISTS gt_rooms;
CREATE TABLE gt_rooms (
    id SERIAL PRIMARY KEY,
    room_id VARCHAR(9),
    user_id INT,
    trader_id INT,
    game_trade TEXT,
    game_id INT
);
SELECT * FROM gt_rooms;