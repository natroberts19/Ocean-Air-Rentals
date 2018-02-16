drop database if exists oar_db;

create database oar_db;

USE oar_db;

CREATE TABLE reservations (
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    phone varchar(15) NOT NULL,
    beach varchar(255) NOT NULL,
    rentalitem varchar(255) NOT NULL,
    rentaldate date NOT NULL,
	createdAt TIMESTAMP default current_timestamp NOT NULL,
	PRIMARY KEY (id)
  );
  
create table inventory (
	id int NOT NULL AUTO_INCREMENT,
    beach varchar(255) not null,
    rentalitem varchar(255) NOT NULL,
    price decimal(11) Not NUll,
    rentable boolean default true,
    createdAt TIMESTAMP default current_timestamp NOT NULL,
	PRIMARY KEY (id)

 );
