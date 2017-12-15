CREATE DATABASE sushi_db;
USE sushi_db;

CREATE TABLE sushiRolls
(
id int NOT NULL AUTO_INCREMENT,
sushi_name varchar(255) NOT NULL,
devoured BOOLEAN default NULL,
entry_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);
