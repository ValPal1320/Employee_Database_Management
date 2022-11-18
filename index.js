// List of dependencies
const mysql2 = require('mysql2');
const inquirer = import('inquirer');
require("console.table");
// const chalk = require('chalk');
require('dotenv').config();

// Create mysql connection
const connection = mysql2.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect(err => {
    if (err) throw err;
    startPrompt();
})

// List of options for answers
const options = {
    viewAllDepts: "View all departments",
    viewAllRoles: "View all roles",
    viewAllEmps: "View all employees",
    addDept: "Add a department",
    addRole: "Add a role",
    addEmp: "Add an employee",
    updateEmpRole: "Update an employee's role",
    deleteDept: "Delete a department",
    deleteRole: "Delete a role",
    deleteEmp: "Delete an employee",
    viewEmpByDept: "View employees by department",
    viewEmpByManager: "View an employee by manager",
    updateEmpsManager: "Update an employee's manager",
    viewDeptBudget: "View a department's budget"
}

function startPrompt() {

    inquirer.prompt({
        type: "list",
        name: "selection",
        message: "What would you like to do?",
        choices: [
            options.viewAllDepts,
            options.addDept,
            options.deleteDept,
            options.viewAllRoles,
            options.addRole,
            options.deleteRole,
            options.viewAllEmps,
            options.addEmp,
            options.deleteEmp,
            options.updateEmpRole,
            options.viewEmpByManager,
            options.updateEmpsManager,
            options.viewEmpByDept,
            options.viewDeptBudget
        ]
    })
}