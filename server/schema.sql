 CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
    /* Describe your table here.*/
  messageText varchar(150),
  roomID varchar(20),
  userID varchar(20),
  messageID int not null auto_increment,
  primary key (messageID)
);

CREATE TABLE user (
  userName varchar(20),
  userID int not null auto_increment,
  primary key (userID)
);

CREATE TABLE room (
  roomName varchar(20),
  roomID int not null auto_increment,
  primary key (roomID)
);
