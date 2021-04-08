const generateCard = () => {
    return `<div class = "card">
        <div class="bg-primary text-light card-header"><h2 class= "text-light">NAME - Role</h2></div>
        <div class="bg-light">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: </li>
                <li class="list-group-item">Email: </li>
                <li class="list-group-item">Github/Office number</li>
            </ul>
        </div>
    </div>`
}

module.exports = generateCard;