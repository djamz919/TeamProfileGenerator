const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super.name = name;
        super.id = id;
        super.email = email;
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;