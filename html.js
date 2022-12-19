const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([

{
    type: 'input',
    name: 'name',
    message: "what is the team member's name?", 

},
{
    type: 'input',
    name: 'id',
    message: "what is the team member's id?", 

},
{
    type: 'input',
    name: 'email',
    message: "what is the team member's email?", 

},
{
    type: 'list',
    name: 'position',
    message: "what position does the team member hold?", 
    choices: ['manager','engineer','intern'],

}, 
{
    when: input => {
        return input.position === "manager"
    },
    type: "input",
    name: "office",
    message: "what is this team member's office number?",
},
{
    when: input => {
        return input.position === "engineer"
    },
    type: "input",
    name: "github",
    message: "what is this team member's github username?",
},
{
    when: input => {
        return input.position === "intern"
    },
    type: "input",
    name: "school",
    message: "what school does this team member attend?",
},

    ]);

    //--------------COMMAND LINE QUESTIONS ARE WORKING--------------//



