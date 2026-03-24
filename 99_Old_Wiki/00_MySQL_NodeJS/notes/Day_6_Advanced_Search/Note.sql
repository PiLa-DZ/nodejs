-- INDEX (BTree data structure)
-- Indexes are used to find values within a specific column more quickly
-- MySQL normally searches sequentially through a column
-- The longer the comumn, the more expensive the operation is
-- UPDATE takes more time, SELECT takes less time

-- Show all indexes of table
SHOW INDEXES FROM hunters;
SHOW INDEXES FROM hunters \G -- In terminal

-- Create new index for age
CREATE INDEX age_index ON hunters(age);

-- Find age Greater Than 18 
SELECT * FROM hunters
WHERE age >= 18;

-- Create Multi INDEX
CREATE INDEX last_name_first_name_index
ON hunters(last_name, first_name);

-- DELETE INDEX
ALTER TABLE hunters
DROP INDEX last_name_index;
