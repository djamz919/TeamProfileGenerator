const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const managerExample = new Manager('John', '001', 'john001@gmail.com', '101');

    expect(managerExample.name).toBe('John');
    expect(managerExample.id).toBe('001');
    expect(managerExample.email).toBe('john001@gmail.com');
    expect(managerExample.officeNumber).toBe('101')
});

test('tests manager methods', () => {
    const managerExample = new Manager('John', '001', 'john001@gmail.com', '101');

    expect(managerExample.getName()).toBe('John');
    expect(managerExample.getId()).toBe('001');
    expect(managerExample.getEmail()).toBe('john001@gmail.com');
    expect(managerExample.getRole()).toBe('Manager');
});