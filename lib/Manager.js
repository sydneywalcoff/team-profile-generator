const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber, subordinates) {
        super(name, id, email);

        this.officeNumber = officeNumber;
        subordinates = [];
    }
    
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;