const generateCard = (name, getRole, id, email, officeNumber, github) => {
    if(getRole === 'Manager') {
        return `<div class = "card">
        <div class="bg-primary text-light card-header">
            <h2 class= "text-light">${name}</h2>
            <h2 class= "text-light">${getRole}</h2>
        </div>
        <div class="bg-light card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id} </li>
                <li class="list-group-item">Email: <a href="mailto: ${email}">${email}</a> </li>
                <li class="list-group-item">Office number: ${officeNumber}</li>
            </ul>
        </div>
    </div>`
    }
    if(getRole ==='Engineer') {
        return `<div class = "card">
        <div class="bg-primary text-light card-header">
            <h2 class= "text-light">${name}</h2>
            <h2 class= "text-light">${getRole}</h2>
        </div>
        <div class="bg-light card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id} </li>
                <li class="list-group-item">Email: <a href="mailto: ${email}">${email}</a> </li>
                <li class="list-group-item">Github: <a href="https://github.com/${github}">${github}</a> </li>
            </ul>
        </div>
    </div>`
    }
}


module.exports = generateCard;