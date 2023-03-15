class all { 
    constructor(name,id,github,email) {
        this.name = name; 
        this.id = id;
        this.email = email;
    }
     
    getName() { 
        return this.name;
    }

    getId() {
        return this.id;
    }
    
    github() {
        return this.github;
    }

    getEmail() {
        return this.email;

    }
    getPosition() {
        return 'all';

    }
};

module.exports = all;