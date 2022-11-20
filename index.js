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
    exit: "Exit"
}

function startPrompt() {

    inquirer
        .prompt({
            type: 'list',
            name: 'selection',
            message: 'What would you like to do?',
            choices: [
                promptMessages.viewAllDepts,
                promptMessages.addDept,
                promptMessages.viewAllRoles,
                promptMessages.addRole,
                promptMessages.viewAllEmps,
                promptMessages.addEmp,
                promptMessages.updateEmpRole,
                promptMessages.exit
            ]
        }).then(answer => {
            switch (answer.selection) {
                case promptMessages.viewAllDepts:
                    viewAllDepts();
                    break;

                // Add a new dept
                case promptMessages.addDept:
                    inquirer
                        .prompt([{
                            type: 'input',
                            name: 'deptName',
                            message: 'Type department name: '
                        }]).then((answer) => {
                            addDept(answer.deptName);
                        })
                    break;

                case promptMessages.viewAllRoles:
                    viewAllRoles();
                    break;

                case promptMessages.addRole:
                    addRole();
                    break;

                case promptMessages.viewAllEmps:
                    viewAllEmps();
                    break;

                case promptMessages.addEmp:
                    addEmp();
                    break;

                case promptMessages.updateEmpRole:
                    updateEmpRole();
                    break;

                case promptMessages.exit:
                    connection.end();
                    break;
            }
        });
};

// View all depts
const viewAllDepts = async () => {
    console.log("All current departments:");
    const allDeps = await connection.promise().query("SELECT * FROM department;");
    console.table(allDeps[0]);
    startPrompt();
};

// Add a new dept
function addDept(deptName) {
    const mysql2 = `INSERT INTO department (name) VALUES ("${deptName}")`;
    connection.query(mysql2, deptName, (err, rows) => {
        if (err) throw err;
        console.log("Department successfully added to the table")
        startPrompt();
    })
}


