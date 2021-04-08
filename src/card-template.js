const generateCard = (name, getRole, id, email, officeNumber) => {
    return `<div class = "card">
        <div class="bg-primary text-light card-header"><h2 class= "text-light">${name}- ${getRole}</h2></div>
        <div class="bg-light">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id} </li>
                <li class="list-group-item">Email: ${email} </li>
                <li class="list-group-item">Github/Office number: ${officeNumber}</li>
            </ul>
        </div>
    </div>`
}

module.exports = generateCard;