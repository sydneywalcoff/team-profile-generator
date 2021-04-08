const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');
const generateAllCards = require('./src/profile-cards');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter their name.",
        // validate: 
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
        name: 'id',
        message: 'Enter their employee id.'
    },
    {
        type: 'list',
        name: 'confirmAddEmployee',
        message: 'Do you want to add another team member, or finish building your team?',
        choices: ['add engineer', 'add intern', 'finish building team']
    }
];
const engineerQuestions = [
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
        name: 'github',
        message: 'Enter their github username.'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter their employee id.'
    },
    {
        type: 'list',
        name: 'confirmAddEmployee',
        message: 'Do you want to add another team member, or finish building your team?',
        choices: ['add engineer', 'add intern', 'finish building team']
    }
];

const internQuestions = [
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
        name: 'github',
        message: 'Enter their school.'
    },
    {
        type: 'input',
        name: 'id',
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
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            team.push(manager);

            if(answers.confirmAddEmployee === 'add engineer') {
                console.log("you're adding an engineer");
                inquirer.prompt(engineerQuestions)
                    .then(answers => {
                        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                        team.push(engineer);
                        generateAllCards(team);
                    });
            }
            // else if (answers.confirmAddEmployee === 'add intern') {
            //     console.log("you've added an intern")
            // }

            

            // fs.writeFile('./dist/index.html', generatePage(), err => {
            //     if (err) throw err;
            
            //     console.log('Portfolio complete! Check dist folder to launch completed Team Profile!');
            // });
        });
};

// fs.writeFile('./dist/index.html', generatePage(team), err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check dist folder to launch completed Team Profile!');
// });

init();