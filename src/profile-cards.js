const generateCard = require('./card-template');

// take in team array and loop through each member to make a profile card

const generateAllCards = teamArr => {
    const cardArr = [];
    for(let i=0; i < teamArr.length; i++) {
        const currentEmployee = teamArr[i];
        const cardHTML = generateCard(currentEmployee);
        cardArr.push(cardHTML)
    }
    return `
    ${cardArr.join('')}
    `
}

module.exports = generateAllCards;