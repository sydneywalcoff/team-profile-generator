const generateCard = require('./card-template');

// take in team array and loop through each member to make a profile card

const generateAllCards = team => {
    for(let i=0; i < team.length; i++) {
        const currentEmployee = team[i];
        return generateCard(currentEmployee);
    }
}

module.exports = generateAllCards;