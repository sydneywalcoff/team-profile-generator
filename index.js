const inquirer = require('inquirer');


const questions = [
    {
        type: 'input',
        name: 'nameInput',
        message: 'Enter a name.'
    },
   
];


const init = () => {
    console.log('Welcome to Team Profile Generator. Please enter information for your first team member.')
    inquirer.prompt(questions);
};

init();