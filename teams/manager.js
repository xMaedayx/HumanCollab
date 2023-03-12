const employee = require('./all');


class manager extends employee {
    constructor (name, id, email, office) {
        super (name, id, email); 
        
        this.office = office; 
    }

    Position () {
        return "manager";
    }
}

module.exports = manager; 