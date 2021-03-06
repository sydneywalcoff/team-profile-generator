const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
        message: "Enter their name.",
        validate: name => {
            if(name) {
                return true;
            } else {
                console.log("Please enter their name.");
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
                console.log("Please enter their email.");
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
                console.log("Please enter their employee id.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter their github username.',
        validate: github => {
            if(github) {
                return true;
            } else {
                console.log("Please enter their github username.");
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
        name: 'id',
        message: 'Enter their employee id.',
        validate: id => {
            if(id) {
                return true;
            } else {
                console.log("Please enter their employee id.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'Enter their school.'
    },
    {
        type: 'list',
        name: 'confirmAddEmployee',
        message: 'Do you want to add another team member, or finish building your team?',
        choices: ['add engineer', 'add intern', 'finish building team']
    }
];

const promptManager = () => {
    inquirer.prompt(managerQuestions)
    .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        if(!manager.subordinates) {
            manager.subordinates = [];
        }
        if(answers.confirmAddEmployee === 'add engineer') {
            console.log('You are adding an engineer');
            promptEngineer(manager);
        }
        if(answers.confirmAddEmployee === 'add intern') {
            console.log('You are adding an intern');
            promptIntern(manager);
        }
        else if(answers.confirmAddEmployee === 'finish building team') {
            writeFile(manager);
        }
    });
};

const promptEngineer = manager => {
    inquirer.prompt(engineerQuestions)
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        manager.subordinates.push(engineer);

        if(answers.confirmAddEmployee === 'add engineer') {
            console.log('You are adding an engineer');
            promptEngineer(manager);
        }
        if(answers.confirmAddEmployee === 'add intern') {
            console.log('You are adding an intern');
            promptIntern(manager);
        }
        else if(answers.confirmAddEmployee === 'finish building team') {
            writeFile(manager);
        }
    });
};

const promptIntern = manager => {
    inquirer.prompt(internQuestions)
    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        manager.subordinates.push(intern);

        if(answers.confirmAddEmployee === 'add engineer') {
            console.log('You are adding an engineer');
            promptEngineer(manager);
        }
        if(answers.confirmAddEmployee === 'add intern') {
            console.log('You are adding an intern');
            promptIntern(manager);
        }
        else if(answers.confirmAddEmployee === 'finish building team') {
            writeFile(manager);
        }
    });
};

const writeFile = manager => {
    fs.writeFile('./dist/index.html', generatePage(manager), err => {
        if(err) throw err;

        fs.copyFile('./src/style.css','./dist/style.css', err => {
            if(err) throw err;

            console.log('Files complete! Check the /dist folder to find your completed Team Profile.')
        })
    })
};


const init = () => {
    console.log("Welcome to Team Profile Generator. Let's start with the team manager.")
    promptManager();
};

init();