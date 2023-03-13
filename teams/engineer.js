const employee = require('./all');

class engineer extends employee { 
    constructor(name, id, email, github) {
      super(name,id,email);
      this.github = github;
    }


GitHandle () {
    return this.github;
}

getPosition() { 
    return 'Engineer'
}

};

module.exports = engineer;