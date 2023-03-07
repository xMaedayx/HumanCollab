const inquirer = require('inquirer');
const fs = require('fs');
const object = require('./object.js')
inquirer
.prompt(object)
.then((response) => {
    console.log(response)
    console.log(response.employee_name)
    console.log(response.employee_ID)
    console.log(response.office)
    console.log()

});

generateHTML 