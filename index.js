// List of dependencies
const mysql2 = require('mysql2');
const inquirer = require("inquirer");
require("console.table");
require('dotenv').config();

// Create mysql connection
const connection = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect(err => {
    if (err) throw err;
    startPrompt();
})

// List of promptMessages for answers
const promptMessages = {
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
    viewDeptBudget: "View a department's budget",
    exit: "Exit"
}

function startPrompt() {

    inquirer
        .prompt({
            type: "list",
            name: "selection",
            message: 'What would you like to do?',
            choices: [
                promptMessages.viewAllDepts,
                promptMessages.addDept,
                promptMessages.deleteDept,
                promptMessages.viewAllRoles,
                promptMessages.addRole,
                promptMessages.deleteRole,
                promptMessages.viewAllEmps,
                promptMessages.addEmp,
                promptMessages.deleteEmp,
                promptMessages.updateEmpRole,
                promptMessages.viewEmpByManager,
                promptMessages.updateEmpsManager,
                promptMessages.viewEmpByDept,
                promptMessages.viewDeptBudget,
                promptMessages.exit
            ]
        }).then(answer => {
            switch (answer.selection) {
                case promptMessages.viewAllDepts:
                    viewAllDepts();
                    break;

                case promptMessages.addDept:
                    addDept();
                    break;

                case promptMessages.deleteDept:
                    deleteDept();
                    break;

                case promptMessages.viewAllRoles:
                    viewAllRoles();
                    break;

                case promptMessages.addRole:
                    addRole();
                    break;

                case promptMessages.deleteRole:
                    deleteRole();
                    break;

                case promptMessages.viewAllEmps:
                    viewAllEmps();
                    break;

                case promptMessages.addEmp:
                    addEmp();
                    break;

                case promptMessages.deleteEmp:
                    deleteEmp();
                    break;

                case promptMessages.updateEmpRole:
                    updateEmpRole();
                    break;

                case promptMessages.viewEmpByManager:
                    viewEmpByManager();
                    break;

                case promptMessages.updateEmpsManager:
                    updateEmpsManager();
                    break;

                case promptMessages.viewEmpByDept:
                    viewEmpByDept();
                    break;

                case promptMessages.viewDeptBudget:
                    viewDeptBudget();
                    break;

                case promptMessages.exit:
                    connection.end();
                    break;
            }
        });
};