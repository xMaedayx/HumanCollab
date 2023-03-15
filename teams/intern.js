const employee = require('./all')

class intern extends employee {
    constructor(name,id,email,university) {
        super(name,id,email);
        this.university = university;
    }


github() {
        return this.github;
    }
    

university() {
    return this.university;
}

getPosition() {
    return "Intern";
}
};

module.exports = intern;

