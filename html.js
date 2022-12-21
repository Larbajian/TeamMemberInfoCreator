const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = ({ name, id, email, position, github, office, school }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"> 
  <title>Document</title>
</head>
<body>
<div class="jumbotron text-center">
  <h1>My Team</h1>
</div>

<div class="container">
<div class="card-deck">
<div class="card bg-primary">
  <div class="card-body text-center">
  <h1> ${position} </h1>
    <p class="card-text">Name: ${name}</p>
    <p class="card-text">ID: ${id}</p>
    <p class="card-text">Email: ${email}</p>
    <p class="card-text">Office: ${office}</p>
  </div>
  </div>

  <div class="card bg-success">
    <div class="card-body text-center">
    <h1> ${position} </h1>
    <p class="card-text">Name: ${name}</p>
    <p class="card-text">ID: ${id}</p>
    <p class="card-text">Email: ${email}</p>
    <p class="card-text">GitHub: ${github}</p>
    </div>
  </div>

 <div class="card bg-warning">
    <div class="card-body text-center">
    <h1> ${position} </h1>
    <p class="card-text">Name: ${name}</p>
    <p class="card-text">ID: ${id}</p>
    <p class="card-text">School: ${school}</p>
    </div>
  </div>
   
  </div>
</div>
</body>
</html>`;

/*
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "what is the team member's name?",
    },
    {
      type: "input",
      name: "id",
      message: "what is the team member's id?",
    },
    {
      type: "input",
      name: "email",
      message: "what is the team member's email?",
    },
    {
      type: "list",
      name: "position",
      message: "what position does the team member hold?",
      choices: ["manager", "engineer", "intern"],
    },
    {
      when: (input) => {
        return input.position === "manager";
      },
      type: "input",
      name: "office",
      message: "what is this team member's office number?",
    },
    {
      when: (input) => {
        return input.position === "engineer";
      },
      type: "input",
      name: "github",
      message: "what is this team member's github username?",
    },
    {
      when: (input) => {
        return input.position === "intern";
      },
      type: "input",
      name: "school",
      message: "what school does this team member attend?",
    },
    {
        type: "list",
        name: "finish",
        message: "do you team members to enter into the system?",
        choices: ["yes, I have team members to enter", "no, I have no team members to enter"],
    },
])
*/
async function getAnswers() {
  let finish = "no, I have no team members to enter";

  while (finish !== "no, I have no team members to enter") {
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: "finish",
        message: "do you team members to enter into the system?",
        choices: [
          "yes, I have team members to enter",
          "no, I have no team members to enter",
        ],
      },
      {
        type: "input",
        name: "name",
        message: "what is the team member's name?",
      },
      {
        type: "input",
        name: "id",
        message: "what is the team member's id?",
      },
      {
        type: "input",
        name: "email",
        message: "what is the team member's email?",
      },
      {
        type: "list",
        name: "position",
        message: "what position does the team member hold?",
        choices: ["manager", "engineer", "intern"],
      },
      {
        when: (input) => {
          return input.position === "manager";
        },
        type: "input",
        name: "office",
        message: "what is this team member's office number?",
      },
      {
        when: (input) => {
          return input.position === "engineer";
        },
        type: "input",
        name: "github",
        message: "what is this team member's github username?",
      },
      {
        when: (input) => {
          return input.position === "intern";
        },
        type: "input",
        name: "school",
        message: "what school does this team member attend?",
      },
      {
        type: "list",
        name: "finish",
        message: "do you team members to enter into the system?",
        choices: [
          "yes, I have team members to enter",
          "no, I have no team members to enter",
        ],
      },
    ]);

    finish = answers.finish;
  }
}

getAnswers();

//--------------COMMAND LINE QUESTIONS ARE WORKING--------------//

/*.then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile("index.html", htmlPageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created index.html!")
    );
  });*/
