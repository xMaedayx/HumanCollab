const employee = require('./all')

class intern extends employee {
    constructor(name,id,email,university) {
        super(name,id,email);
        this.university = university;
    }


university() {
    return this.university;
}

getPosition() {
    return "Intern";
}
};

module.exports = intern;

