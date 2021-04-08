const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');

const questions = [
    {
        type: 'input',
        name: 'nameInput',
        message: "Enter the team manager's name."
    },
    {
        type: 'input',
        name: 'emailInput',
        message: "Enter the manager's email address."
    },
    {
        type: 'input',
        name: 'officeInput',
        message: 'Enter office number.'
    },
    {
        type: 'input',
        name: 'idInput',
        message: 'Enter employee id.'
    },
    {
        type: 'list',
        name: 'confirmAddEmployee',
        message: 'Do you want to add an engineer or intern, or finish building your team?',
        choices: ['add engineer', 'add intern', 'finish building team']
    },
    {
        type: 'input',
        name: 'idInput',
        message: 'Enter employee id.',
        // when: ({confirmAddEmployee})
    },
    
    
];


// const init = () => {
//     console.log('Welcome to Team Profile Generator. Please enter information for your team manager.')
//     inquirer.prompt(questions)
//         .then(answers => {
//             console.log(answers)
//         });
// };

fs.writeFile('./dist/index.html', generatePage(), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check dist folder to launch completed Team Profile!');
});

// init();