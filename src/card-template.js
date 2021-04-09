const generateCard = employee => {
    if(employee.getRole() ==='Engineer') {
        return `<div class = "card">
        <div class="bg-primary text-light card-header">
            <h2 class= "text-light">${employee.name}</h2>
            <h2 class= "text-light">${employee.getRole()}</h2>
        </div>
        <div class="bg-light card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.getId()} </li>
                <li class="list-group-item">Email: <a href="mailto: ${employee.getEmail()}">${employee.getEmail()}</a> </li>
                <li class="list-group-item">Github: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub}</a> </li>
            </ul>
        </div>
    </div>`
    }
    if(employee.getRole() ==='Intern') {
        return `<div class = "card">
        <div class="bg-primary text-light card-header">
            <h2 class= "text-light">${employee.name}</h2>
            <h2 class= "text-light">${employee.getRole()}</h2>
        </div>
        <div class="bg-light card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.getId()} </li>
                <li class="list-group-item">Email: <a href="mailto: ${employee.getEmail()}">${employee.getEmail()}</a> </li>
                <li class="list-group-item">School: ${employee.getSchool()}</li>
            </ul>
        </div>
    </div>`
    }
}


module.exports = generateCard;