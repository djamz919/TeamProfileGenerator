// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateWebsite = require('./src/page-template.js');

// Create an array of questions for the content of the manager
const managerQuestions = ["What is the team manager's name?", "What is the team manager's id?", "What is the team manager's email?", "What is the team manager's office number?"];
const engineerQuestions = ["What is your engineer's name?", "What is your engineer's id?", "What is your engineer's email?", "What is your engineer's Github usrename?"];
const internQuestions = ["What is your intern's name?", "What is your intern's id?", "What is your intern's id?", "What is your intern's school?"];

[managerName, managerId, managerEmail, managerOffice] = managerQuestions;
[engineerName, engineerId, engineerEmail, engineerGithub] = engineerQuestions;
[internName, internId, internEmail, internSchool] = internQuestions;

const promptManager = teamData => {
    if(!teamData.manager) {
        teamData.manager = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: managerName,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: managerId,
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's id!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: managerEmail,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: managerOffice,
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's office number!");
                    return false;
                }
            }
        },
                {
            type: 'list',
            name: 'addMember',
            message: "Which type of team member would you like to add?",
            choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
        }
    ])
    .then(managerData => {
        teamData.manager.push(managerData);
        if(managerData.addMember === 'Engineer'){
            return promptEngineer(teamData);
        } else if(managerData.addMember === 'Intern'){
            return promptIntern(teamData);
        } else {
            return teamData;
        }
    });
}


const promptEngineer = teamData => {
    if(!teamData.engineer) {
        teamData.engineer = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: engineerName,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: engineerId,
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's id!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: engineerEmail,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: engineerGithub,
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's Github!");
                    return false;
                }
            }
        },
                {
            type: 'list',
            name: 'addMember',
            message: "Which type of team member would you like to add?",
            choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
        }
    ])
    .then(engineerData => {
        teamData.engineer.push(engineerData);
        if(engineerData.addMember === 'Engineer'){
            return promptEngineer(teamData);
        } else if(managerData.addMember === 'Intern'){
            return promptIntern(teamData);
        } else {
            return teamData;
        }
    });
}

const promptIntern = teamData => {
    if(!teamData.intern) {
        teamData.intern = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: internName,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: internId,
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's id!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: internEmail,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: internSchool,
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!");
                    return false;
                }
            }
        },
                {
            type: 'list',
            name: 'addMember',
            message: "Which type of team member would you like to add?",
            choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
        }
    ])
    .then(internData => {
        teamData.intern.push(internData);
        if(internData.addMember === 'Engineer'){
            return promptEngineer(teamData);
        } else if(internData.addMember === 'Intern'){
            return promptIntern(teamData);
        } else {
            return teamData;
        }
    });
}

function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}

function copyFile () {
    
}

console.log('Please build your team');
promptManager()
    .then(teamData => {
        return generateWebsite(teamData)
    })
    .then(pageHTML => {
        return writeToFile('./dist/index.html', pageHTML);
    });