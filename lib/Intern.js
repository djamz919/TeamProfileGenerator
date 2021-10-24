const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        super.name = name;
        super.id = id;
        super.email = email;
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;