
const Engineer = require('../teams/engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Meghan', 69, 'whatsup@gmail', 'xmaedayx');
    
    expect(engineer.github) .toEqual(expect.any(String));
});


test('gets engineer github value', () => {
    const engineer = new Engineer('Meghan', 69, 'whatsup@gmail', 'xmaedayx');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});


test('gets position of employee', () => {
    const engineer = new Engineer('Meghan', 69, 'whatsup@gmail', 'xmaedayx');

    expect(engineer.getPosition()).toEqual("Engineer");
});