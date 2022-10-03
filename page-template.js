const generateManager = managerData => {
    return `
    <div class="card-deck">
    ${managerData
        .filter(({ officeNumber }) => officeNumber)
        .map(({ name, id, email, role, officeNumber }) => {
        return `
        <div class="card" style="max-width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Manager</h5>
        <p>Name: ${name}</p>
        <p>ID#: ${id}</p>
        <p>Email Address: <a href="mailto:${email}">${email}</a></p>
        <p>Role: ${role}</p>
        <p>Manages Office: ${officeNumber} </p>
        </div>
        </div>
        `
    })}
    `;
};

const generateEngineer = engineerData => {
    return `
    <div class="card-deck">
    ${engineerData
        .filter(({ github }) => github)
        .map(({ name, id, email, role, github }) => {
        return `
        <div class="card" style="max-width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Engineer</h5>
        <p>Name: ${name}</p>
        <p>ID#: ${id}</p>
        <p>Email Address: <a href="mailto:${email}"> ${email}</a></p>
        <p>Role: ${role}</p>
        <p>GitHub Profile: <a href="https:github.com/${github}" target="_blank">GitHub</a></p>
        </div>
        </div>
        `;
    }).join('')}
    </div>
    `;
};

const generateIntern = internData => {
    return `
    <div class="card-deck">
    ${internData
        .filter(({ school }) => school)
        .map(({ name, id, email, role, school }) => {
        return `
        <div class="card" style="max-width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Intern</h5>
        <p>Name: ${name}</p>
        <p>ID#: ${id}</p>
        <p>Email Address: <a href="mailto:${email}">${email}</a></p>
        <p>Role: ${role}</p>
        <p>School: ${school}</p>
        </div>
        </div>
        `;
    }).join('')}
    </div>
    `;
};

module.exports = employeeData => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <title>My Team</title>
    </head>
    <body>
        <header>
            <h1 class="text-center">My Team</h1>
        </header>
            <main>
    
                ${generateManager(employeeData)}

                ${generateEngineer(employeeData)}
                
                ${generateIntern(employeeData)}
                
            </main>
    </body>
    </html>
    `;

};