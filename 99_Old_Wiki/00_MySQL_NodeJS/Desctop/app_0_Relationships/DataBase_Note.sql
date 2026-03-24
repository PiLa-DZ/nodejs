-- 1. Database Schema Design (The Blueprint) ===================================

-- -- 1 --> Departments : | Engineering         | Marketing  | HR        |
-- -- 2 --> Employees   : | Software Engineers  | PMs        |           |
-- -- 3 --> Projects    : | Search              | Maps       | YouTube   |

-- 2 Database Setup ============================================================

-- 0. Create DataBase
CREATE DATABASE Google_DB;
USE Google_DB;

-- 1. Departments (One-to-Many with Employees)
CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(50) NOT NULL
);
INSERT INTO departments (department_name) VALUES 
('Engineering'), 
('Cloud Services'), 
('Artificial Intelligence'), 
('Cyber Security');

-- 2. Employees
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    salary DECIMAL(10, 2), -- More accurate than INT for money
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL
);
INSERT INTO employees (first_name, last_name, salary, department_id) VALUES 
('Alice',   'Johnson',   95000.00,  1), -- Engineering
('Bob',     'Smith',     105000.50, 2), -- Cloud
('Charlie', 'Davis',     120000.00, 3), -- AI
('Diana',   'Prince',    110000.00, 4), -- Cyber Security
('Ethan',   'Hunt',      88000.00,  1), -- Engineering
('Fiona',   'Gallagher', 92000.00,  2); -- Cloud

-- 3. Projects (Many-to-Many with Employees)
CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_name VARCHAR(50) NOT NULL,
    budget DECIMAL(15, 2)
);
INSERT INTO projects (project_name, budget) VALUES 
('Project Phoenix',     500000.00),
('Cloud Migrate',       250000.00),
('AI Chatbot v2',       1000000.00),
('Security Audit 2026', 150000.00);

-- 4. Junction Table (To link Employees and Projects)
CREATE TABLE employee_projects (
    employee_id INT,
    project_id INT,
    PRIMARY KEY (employee_id, project_id),
    FOREIGN KEY (employee_id) REFERENCES employees(id) ON DELETE CASCADE,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);
INSERT INTO employee_projects (employee_id, project_id) VALUES 
(1, 1), (1, 2), -- Alice تعمل في Phoenix و Cloud Migrate
(2, 2),         -- Bob يعمل في Cloud Migrate
(3, 3),         -- Charlie يعمل في AI Chatbot
(4, 4), (4, 1), -- Diana تعمل في Security و Phoenix
(5, 1),         -- Ethan يعمل في Phoenix
(6, 2), (6, 3); -- Fiona تعمل في Cloud Migrate و AI Chatbot


