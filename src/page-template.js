const generateAllCards = require('./profile-cards');

const generatePage = manager => {
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
    <!-- header -->
    <header class="d-flex bg-primary text-light justify-content-center"><h1>My Team</h1></header>
    <!-- main -->
    <main class = "container justify-content-center">
        <div class="mt-5 row justify-content-around">
            <div class = "card col-3 m-2">
                <div class="bg-primary text-light card-header">
                    <h2 class= "text-light">${manager.name}</h2>
                    <h2 class= "text-light">${manager.getRole()}</h2>
                </div>
                <div class="bg-light card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${manager.getId()} </li>
                        <li class="list-group-item">Email: <a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a> </li>
                        <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                    </ul>
                </div>
            </div>
            ${generateAllCards(manager.subordinates)}
        </div>
    </main>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>`
}

module.exports = generatePage;