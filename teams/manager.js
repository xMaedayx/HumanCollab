const employee = require('./all');


class Manager extends employee {
    constructor (name, id, email, office) {
        super (name, id, email); 
        
        this.office = office; 
    }

    getPosition () {
        return "Manager";
    }
}

module.exports = Manager; 