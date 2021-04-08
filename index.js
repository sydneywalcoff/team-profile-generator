const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter their name.",
        validate: name => {
            if(name) {
                return true;
            } else {
                console.log("Please enter your team manager's name.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter their email address.",
        validate: email => {
            if(email) {
                return true;
            } else {
                console.log("Please enter your team manager's email.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter their office number.',
        validate: officeNumber => {
            if(officeNumber) {
                return true;
            } else {
                console.log("Please enter your team manager's office number.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter their employee id.',
        validate: id => {
            if(id) {
                return true;
            } else {
                console.log("Please enter your team manager's id.");
                return false;
            }
        }
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
    },
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is'
    }
];

const promptManager = (managerQuestions) => {
    inquirer.prompt(managerQuestions)
        .then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            team.push(manager);

            if(answers.confirmAddEmployee === 'add engineer') {
                // promptEngineer(engineerQuestions);
                console.log('You are adding an engineer');
            }
            if(answers.confirmAddEmployee === 'add intern') {
                // promptIntern(internQuestions);
                console.log('You are adding an intern');
            }
        });
};

const promptEngineer = () => {

};

const promptIntern = () => {

};


const init = () => {
    console.log("Welcome to Team Profile Generator. Let's start with the team manager.")
    promptManager(managerQuestions);
};


init();