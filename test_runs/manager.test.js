
const Manager = require('../teams/Manager');


test('creates an Manager object', () => {
    const manager = new Manager('Meghan', 69, 'whatsup@gmail', 001);
    
    expect(manager.office).toEqual(expect.any(Number));
});


test('gets role of employee', () => {
    const manager = new Manager('Meghan', 69, 'whatsup@gmail.com');

    expect(manager.getPosition()).toEqual("Manager");
}); 
