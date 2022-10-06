const generateManager = managerData => {
    return `
    ${managerData
        .filter(({ officeNumber }) => officeNumber)
        .map(({ name, id, email, role, officeNumber }) => {
        return `
        <div class="card" style="width:400px">
            <div class="card-body">
                <div class="card-header lead font-weight-bold">Manager</div>
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
    ${engineerData
        .filter(({ github }) => github)
        .map(({ name, id, email, role, github }) => {
        return `
        <div class="card" style="width:400px">
            <div class="card-body">
                <div class="card-header lead font-weight-bold">Engineer</div>
                <p>Name: ${name}</p>
                <p>ID#: ${id}</p>
                <p>Email Address: <a href="mailto:${email}"> ${email}</a></p>
                <p>Role: ${role}</p>
                <p>GitHub Profile: <a href="https:github.com/${github}" target="_blank">GitHub</a></p>
            </div>
        </div>
        `;
    }).join('')}
    `;
};

const generateIntern = internData => {
    return `
    ${internData
        .filter(({ school }) => school)
        .map(({ name, id, email, role, school }) => {
        return `
        <div class="card" style="width:400px">
            <div class="card-body">
                <div class="card-header lead font-weight-bold">Intern</div>
                <p>Name: ${name}</p>
                <p>ID#: ${id}</p>
                <p>Email Address: <a href="mailto:${email}">${email}</a></p>
                <p>Role: ${role}</p>
                <p>School: ${school}</p>
            </div>
        </div>   
        `;
    }).join('')}
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
        <link rel="stylesheet" href="../assets/style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <title>My Team</title>
    </head>
    <body>
        <header>
            <h1 class="text-center">My Team</h1>
        </header>
            <main>
            <div class="card-deck">
                ${generateManager(employeeData)}

                ${generateEngineer(employeeData)}
                
                ${generateIntern(employeeData)}
            </div>
            </main>
    </body>
    </html>
    `;

};