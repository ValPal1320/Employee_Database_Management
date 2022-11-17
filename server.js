// List of dependencies
const mysql2 = require("mysql2");
const inquirer = require("inquirer");
const chalk = require("chalk");
require("console.table");

// Create mysql connection
const connection = mysql2.createConnection({
    host: 'localhost',
    port: 3004,
    user: 'root',
    password: 'pickles512',
    database: 'employee_db'
});

connection.connect(err => {
    if (err) throw err;
    firstPrompt();
})