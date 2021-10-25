const generateCards = teamData => {
    let html = ``;
    teamData.forEach(element => {
        if(element.getRole() === "Manager"){
            html = html + `
                <div class="card" style="max-width: 18rem;">
                    <div class="card-header text-white bg-primary mb-3">
                        <h2 class="card-title">${element.name}</h2>
                        <h2 class="card-title">Manager</h2>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${element.id}</li>
                        <li class="list-group-item">Email: <span><a href="mailto:${element.email}">${element.email}</a></span></li>
                        <li class="list-group-item">Office Number: ${element.office}</li>
                    </ul>
                </div>
             `
        } else if(element.getRole() === "Engineer"){
            html = html + `
                <div class="card" style="max-width: 18rem;">
                    <div class="card-header text-white bg-primary mb-3">
                        <h2 class="card-title">${element.name}</h2>
                        <h2 class="card-title">Engineer</h2>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${element.id}</li>
                        <li class="list-group-item">Email: <span><a href="mailto:${element.email}">${element.email}</a></span></li>
                        <li class="list-group-item">Github: <span><a href="https://github.com/${element.github}">${element.github}</a></span></li>
                    </ul>
                </div>
            `
        } else if(element.getRole() === "Intern"){
            html = html + `
            <div class="card" style="max-width: 18rem;">
                <div class="card-header text-white bg-primary mb-3">
                    <h2 class="card-title">${element.name}</h2>
                    <h2 class="card-title">Intern</h2>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${element.id}</li>
                    <li class="list-group-item">Email: <span><a href="mailto:${element.email}">${element.email}</a></span></li>
                    <li class="list-group-item">School: ${element.school}</li>
                </ul>
            </div>
        `
        }
    });

    return html;
}

module.exports = templateData => {

    return `
<!DOCTYPE html>
<html lang="en">
    
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
    
<body>
    <header>
        <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="page-title text-white text-center bg-secondary py-2 px-3">My Team</h1>
        </div>
    </header>
    <main class="container my-5">
        <section class="my-3" id="team">
            <div class="container flex-row justify-space-between align-center">
                ${generateCards(templateData)}
            </div>
        </section>
    </main>
    <footer class="container text-center py-3">
        <h5 class="text-dark">&copy; ${new Date().getFullYear()}</h5>
    </footer>
</body>
</html>
    `;
};