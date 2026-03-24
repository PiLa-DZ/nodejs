CREATE DATABASE Hunter_X_Hunter_DB;
USE Hunter_X_Hunter_DB;

CREATE TABLE hunters (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50),
    age INT,
    skill VARCHAR(100)
);

INSERT INTO hunters (first_name, last_name, age, skill) VALUES 
('Gon',      'Freecss',     12, 'Jajanken'),
('Killua',   'Zoldyck',     12, 'Godspeed / Electricity'),
('Kurapika', 'Kurta',       19, 'Conjured Chains / Emperor Time'),
('Leorio',   'Paradinight', 19, 'Warp Punching'),
('Hisoka',   'Morow',       28, 'Bungee Gum'),
('Isaac',    'Netero',     110, '100-Type Guanyin Bodhisattva'),
('Chrollo',  'Lucilfer',    26, 'Skill Hunter');
