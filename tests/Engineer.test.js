const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineerExample = new Engineer('John', '001', 'john001@gmail.com', 'john001');

    expect(engineerExample.name).toBe('John');
    expect(engineerExample.id).toBe('001');
    expect(engineerExample.email).toBe('john001@gmail.com');
    expect(engineerExample.github).toBe('john001')
});

test('tests engineer methods', () => {
    const engineerExample = new Engineer('John', '001', 'john001@gmail.com', 'john001');

    expect(engineerExample.getName()).toBe('John');
    expect(engineerExample.getId()).toBe('001');
    expect(engineerExample.getEmail()).toBe('john001@gmail.com');
    expect(engineerExample.getGithub()).toBe('john001');
    expect(engineerExample.getRole()).toBe('Engineer');
});