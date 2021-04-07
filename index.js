const inquirer = require('inquirer');


const questions = [
    {
        type: 'input',
        name: 'nameInput',
        message: "Enter your teammate's name."
    },
    {
        type: 'input',
        name: 'emailInput',
        message: "Enter your teammate's email."
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
    }
];


const init = () => {
    console.log('Welcome to Team Profile Generator. Please enter information for your team manager.')
    inquirer.prompt(questions)
        .then(answers => {
            console.log(answers)
        });
};

init();