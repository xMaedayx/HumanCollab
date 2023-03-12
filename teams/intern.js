const employee = require('./all')

class intern extends employee {
    constructor(name,id,email,school) {
        super(name,id,email);
        this.school = school;
    }


University() {
    return this.school;
}

Position() {
    return "intern";
}
};

module.exports = intern;

