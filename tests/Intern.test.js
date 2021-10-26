const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const internExample = new Intern('John', '001', 'john001@gmail.com', 'Rutgers');

    expect(internExample.name).toBe('John');
    expect(internExample.id).toBe('001');
    expect(internExample.email).toBe('john001@gmail.com');
    expect(internExample.school).toBe('Rutgers')
});

test('tests intern methods', () => {
    const internExample = new Intern('John', '001', 'john001@gmail.com', 'Rutgers');

    expect(internExample.getName()).toBe('John');
    expect(internExample.getId()).toBe('001');
    expect(internExample.getEmail()).toBe('john001@gmail.com');
    expect(internExample.getSchool()).toBe('Rutgers');
    expect(internExample.getRole()).toBe('Intern');
});