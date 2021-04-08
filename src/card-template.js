const generateCard = (team) => {
    console.log(team.getRole());
    if(team.getRole() === 'Manager') {
        return `<div class = "card">
        <div class="bg-primary text-light card-header">
            <h2 class= "text-light">${team.name}</h2>
            <h2 class= "text-light">${team.getRole()}</h2>
        </div>
        <div class="bg-light card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${team.getId()} </li>
                <li class="list-group-item">Email: <a href="mailto: ${team.getEmail()}">${team.getEmail()}</a> </li>
                <li class="list-group-item">Office number: ${team.officeNumber}</li>
            </ul>
        </div>
    </div>`
    }
    if(team.getRole() ==='Engineer') {
        return `<div class = "card">
        <div class="bg-primary text-light card-header">
            <h2 class= "text-light">${team.name}</h2>
            <h2 class= "text-light">${team.getRole()}</h2>
        </div>
        <div class="bg-light card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${team.getId()} </li>
                <li class="list-group-item">Email: <a href="mailto: ${team.getEmail()}">${team.getEmail()}</a> </li>
                <li class="list-group-item">Github: <a href="https://github.com/${team.getGithub()}" target="_blank">${team.getGithub}</a> </li>
            </ul>
        </div>
    </div>`
    }
    if(team.getRole() ==='Intern') {
        return `<div class = "card">
        <div class="bg-primary text-light card-header">
            <h2 class= "text-light">${team.name}</h2>
            <h2 class= "text-light">${team.getRole()}</h2>
        </div>
        <div class="bg-light card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${team.getId()} </li>
                <li class="list-group-item">Email: <a href="mailto: ${team.getEmail()}">${team.getEmail()}</a> </li>
                <li class="list-group-item">School: ${team.getSchool()}</li>
            </ul>
        </div>
    </div>`
    }
}


module.exports = generateCard;