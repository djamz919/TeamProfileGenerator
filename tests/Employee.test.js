const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employeeExample = new Employee('John', '001', 'john001@gmail.com');

    expect(employeeExample.name).toBe('John');
    expect(employeeExample.id).toBe('001');
    expect(employeeExample.email).toBe('john001@gmail.com');
});

test('tests employee methods', () => {
    const employeeExample = new Employee('John', '001', 'john001@gmail.com');

    expect(employeeExample.getName()).toBe('John');
    expect(employeeExample.getId()).toBe('001');
    expect(employeeExample.getEmail()).toBe('john001@gmail.com');
    expect(employeeExample.getRole()).toBe('Employee');
});