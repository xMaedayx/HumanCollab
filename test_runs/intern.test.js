
const Intern = require('../teams/intern');


test('creates an Intern object', () => {
    const intern = new Intern('Meghan', 69, 'whatsup@gmail', 'MIT');
    
    expect(intern.university) .toEqual(expect.any(String));
});


test('gets employee school', () => {
    const intern = new Intern('Meghan', 69, 'whatsup@gmail', 'MIT');
    
    expect(intern.getUniversity()).toEqual(expect.stringContaining(intern.university.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Meghan', 69, 'whatsup@gmail.com', 'MIT');

    expect(intern.getPosition()).toEqual("Intern");
}); 