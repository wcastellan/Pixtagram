DROP DATABASE IF EXISTS nodeapp;

CREATE DATABASE nodeapp;
USE nodeapp;

CREATE TABLE `images` (
    `id` int(10) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `image_name` varchar(255) DEFAULT NULL
);