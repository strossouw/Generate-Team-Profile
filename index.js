const { writeFile } = require('./display-page');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generatePage = require('./page-template');
const employeeData = [];


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Please Enter the Manager's name:",
            validate: managerName => {
                if (managerName) {
                    return true;
                } else console.log("You must enter the Manager's name:");
                    return false;
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: "Enter the manager's Employee ID:",
            validate: managerID => {
                if (managerID) {
                    return true;
                } else console.log("You must enter the manager's Employee ID:");
                    return false;
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Enter the manager's email address",
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else console.log("You must enter the manager's email address");
                    return false
            }
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "Enter the manager's Office Number:",
            validate: managerOfficeNum => {
                if (managerOfficeNum) {
                    return true;
                } else console.log("You must enter the manager's office number.");
                    return false;
            }
        },
    ])

    .then((answers) => {
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOffice);
        employeeData.push(manager);
        console.log(employeeData);
        return employeeData;
        });
};

const promptEmployees = employeeData => {
    console.log(`
   ( M | a | n | a | g | e | r )  ( A | d | d | e | d | ! )
   ( A | d | d )   ( E | m | p | l | o | y | e | e | s | ! )
   `);
    return inquirer.prompt([
        {
            type: 'list',
            name: 'addEmployee',
            message: "Would you like to add an employee? If not, select 'Finish'.",
            choices: ['Engineer', 'Intern', 'Finish'],
            
        },
    ])
        .then(employeeType => {
            console.log(employeeType.addEmployee, "CHOICES!")
            if (employeeType.addEmployee === 'Engineer') {
                return promptEngineer(employeeData);
            } else if (employeeType.addEmployee === 'Intern') {
                return promptIntern(employeeData);
            } else return employeeData;
        }); 
};

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "Please enter the engineer's name. (Required)",
            validate: engineerNameInput => {
                if (engineerNameInput) {
                    return true;
                } else console.log("Please enter the engineer's name.");
                    return false;
            }
        },
        {
            type: 'input',
            name: 'engineerID',
            message: "Please enter the engineer's employee ID. (Required)",
            validate: engineerIDInput => {
                if (engineerIDInput) {
                    return true;
                } else console.log("Please enter the engineer's employee ID.");
                    return false;
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "Please enter the engineer's email address. (Required)",
            validate: engineerEmailInput => {
                if (engineerEmailInput) {
                    return true;
                } else console.log("Please enter the engineer's email address.");
                    return false;
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "Please enter the engineer's GitHub username. (Required)",
            validate: engineerGithubInput => {
                if (engineerGithubInput) {
                    return true;
                } else console.log("Please enter the engineer's GitHub username.");
                    return false;
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another employee?',
            default: false
        } 
    ])
        .then(engineerData => {
            const engineer = new Engineer(engineerData.engineerName, engineerData.engineerID, engineerData.engineerEmail, engineerData.engineerGithub);
            employeeData.push(engineer);
            console.log(employeeData);
            if (engineerData.confirmAddEmployee) {
                return promptEmployees();
            } else {
                return employeeData;
            }
        });
};

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "Please enter the intern's name. (Required)",
            validate: internNameInput => {
                if (internNameInput) {
                    return true;
                } else console.log("Please enter the intern's name.");
                    return false;
            }
        },
        {
            type: 'input',
            name: 'internID',
            message: "Please enter the intern's employee ID. (Required)",
            validate: internIDInput => {
                if (internIDInput) {
                    return true;
                } else console.log("Please enter the intern's employee ID.");
                    return false;
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "Please enter the intern's email address. (Required)",
            validate: internEmailInput => {
                if (internEmailInput) {
                    return true;
                } else console.log("Please enter the intern's email address.");
                    return false;
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "Please enter the intern's School. (Required)",
            validate: internSchoolInput => {
                if (internSchoolInput) {
                    return true;
                } else console.log("Please enter the intern's School.");
                    return false;
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another employee?',
            default: false
        } 
    ])
        .then(internData => {
            const intern = new Intern(internData.internName, internData.internID, internData.internEmail, internData.internSchool);
            employeeData.push(intern);
            console.log(employeeData);
            if (internData.confirmAddEmployee) {
                return promptEmployees();
            } else {
                return employeeData;
            }
        });
};

promptUser()
    .then(promptEmployees)
    .then(employeeData => {
        return generatePage(employeeData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })

