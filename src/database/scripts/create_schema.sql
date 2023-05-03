CREATE DATABASE clinic;

CREATE TABLE `clinic`.`doctors` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(55) NOT NULL,
    `lastname` VARCHAR(55) NOT NULL,
    `specialty` VARCHAR(55) NOT NULL,
    `consultory` INT NOT NULL,
    `email` VARCHAR(55) NOT NULL,
    PRIMARY KEY(`id`)
);

CREATE TABLE `clinic`.`patients` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(55) NOT NULL,
    `cc` INT NOT NULL,
    `lastname` VARCHAR(55) NOT NULL,
    `age` TINYINT NOT NULL,
    `telephone` INT NOT NULL,
    PRIMARY KEY(`id`)
);

CREATE TABLE `clinic`.`appointments` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `cc` INT NOT NULL,
    `specialty` VARCHAR(55) NOT NULL,
    PRIMARY KEY(`id`)
);