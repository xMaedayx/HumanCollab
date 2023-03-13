class all { 
    constructor(name,id,email) {
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

    getEmail() {
        return this.email;

    }
    getPosition() {
        return 'all';

    }
};

module.exports = all;