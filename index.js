const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter their name."
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter their email address."
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter their office number.'
    },
    {
        type: 'input',
        name: 'idInput',
        message: 'Enter their employee id.'
    },
    {
        type: 'list',
        name: 'confirmAddEmployee',
        message: 'Do you want to add another team member, or finish building your team?',
        choices: ['add engineer', 'add intern', 'finish building team']
    }
];


const init = () => {
    console.log("Welcome to Team Profile Generator. Let's start with the team manager.")
    inquirer.prompt(managerQuestions)
        .then(answers => {
            if(answers.confirmAddEmployee === 'add engineer') {
                console.log("you've added an engineer")
            }
            else if (answers.confirmAddEmployee === 'add intern') {
                console.log("you've added an intern")
            }
        });
};

// fs.writeFile('./dist/index.html', generatePage(), err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check dist folder to launch completed Team Profile!');
// });

init();