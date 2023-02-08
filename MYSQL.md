CODE: Creating Databases
The general command for creating a database:
```sql
CREATE DATABASE <database_name>;

A specific example:

CREATE DATABASE soap_store;
```
CODE: Showing Databases
To list available databases:
```sql
show databases;
```
CODE: Dropping and Using Databases
To drop a database:
```sql
DROP DATABASE <database-name>;
```
To use a database:
```sql
USE <database>
```
CODE: Creating Tables
Creating Tables:
```sql
CREATE TABLE cats (
    name VARCHAR(50),
    age INT
);

CREATE TABLE dogs (
    name VARCHAR(50),
    breed VARCHAR(50),
    age INT
);
```
CODE: How Do We Know It Worked?
SHOW tables;
```sql
SHOW COLUMNS FROM cats;

DESC cats;
```
CODE: Dropping Tables
To drop a table:
```sql
DROP TABLE <table-name>;

To specifically drop the cats table:

DROP TABLE cats
```
CODE: INSERT: The Basics
```sql
CREATE TABLE cats (
    name VARCHAR(50),
    age INT
);


Insert a cat:

INSERT INTO cats (name, age)
VALUES ('Blue Steele', 5);
And another:

INSERT INTO cats (name, age)
VALUE
```
CODE: A Quick Preview of SELECT
To view all rows in our table:
```sql
SELECT * FROM cats;
```
CODE: Multi-inserts
-- Single insert (switching order of name and age)
```sql
INSERT INTO cats (age, name)
VALUES
  (2, 'Beth');


-- Multiple Insert:

INSERT INTO cats (name, age)
VALUES
  ('Meatball', 5),
  ('Turkey', 1),
  ('Potato Face', 15);
```
