-- In your js project
npm install mysql2

-- In terminal
$ mysql -u root -p

-- Add admin user
CREATE USER 'admin'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;

CREATE DATABASE arch_study;
USE arch_study;

CREATE TABLE learners (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    topic VARCHAR(100)
);

-- Now in your project
touch app.js
