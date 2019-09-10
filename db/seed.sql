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