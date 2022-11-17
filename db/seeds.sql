USE employee_db;

INSERT INTO department (id, name)
VALUES (1, "Sales"),
       (2, "Technology"),
       (3, "Finance");

INSERT INTO role (id, title, salary, department_id)
VALUES (100, "Sales Lead", 45000, 1),
       (101, "Software Developer", 85000, 2),
       (102, "Accountant", 70000, 3),
       (103, "Senior Software Developer", 95000, 2),
       (104, "Lead Analyst", 80000, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (123, "John", "Smith", 100, 1001),
       (789, "Jerem", "Hall", 102, 1002),
       (147, "Sarah", "Jones", 103, null),
       (963, "Hector", "Rios", 101, 147),
       (654, "Alex", "Martinez", 104, null);