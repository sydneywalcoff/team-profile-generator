const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');

const employeeQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter  name."
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the manager's email address."
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: 'Enter office number.'
    },
    {
        type: 'number',
        name: 'id',
        message: 'Enter employee id.'
    },
    {
        type: 'list',
        name: 'addEmployee',
        message: 'Do you want to add an engineer, or an intern, or finish building your team?',
        choices: ['add engineer', 'add intern', 'finish building team']
    },
    {
        type: 'input',
        name: 'name',
        message: 'Enter engineer name.',
        when: answers => {
            if(answers.addEmployee) {
                return true;
            }
        }
    } 
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: "What is the engineer's name?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's github?"
    }
];

// const 


const init = () => {
    console.log('Welcome to Team Profile Generator. Please enter information for your team manager.')
    inquirer.prompt(employeeQuestions).then(answers => {
        if(answers.addEmployee === 'add engineer') {
            inquirer.prompt(engineerQuestions).then(engineerAnswers => {
                console.log(engineerAnswers)
                // create EngineerDiv w/ engineer Answers
                // new Engineer(employeeQuestions ... engineerQuestions)
            })
        }
        if(answers.addEmployee === 'add intern') {
            // inquirer.prompt(internQuestions).then(internAnswers => {})
        }
    });
};

// fs.writeFile('./dist/index.html', generatePage(), err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out /dist/index.html to see your generated Team Profile!');
// });

init();