-- 1. إنشاء جدول الأقسام
CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(50) NOT NULL
);

-- 2. إضافة بعض الأقسام
INSERT INTO departments (dept_name) VALUES ('Engineering'), ('Marketing'), ('HR');

-- 3. تعديل جدول الموظفين (أو إنشاؤه من جديد) ليرتبط بالأقسام
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES departments(id)
);

-- Step 4
SELECT employees.name, departments.dept_name
FROM employees
INNER JOIN departments ON employees.dept_id = departments.id;
