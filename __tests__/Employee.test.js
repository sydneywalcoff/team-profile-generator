const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Sydney', 2607127, 'sydney.walcoff@gmail.com');

    expect(employee.name).toBe('Sydney');
    expect(employee.id).toBe(2607127);
    expect(employee.email).toBe('sydney.walcoff@gmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("get's employee's name", () => {
    const employee = new Employee('Sydney', 2607127, 'sydney.walcoff@gmail.com');
    
    expect(employee.getName()).toEqual(expect.any(String));
});

test("get's employee's ID", () => {
    const employee = new Employee('Sydney', 2607127, 'sydney.walcoff@gmail.com');
    
    expect(employee.getId()).toEqual(expect.any(Number));
});

test("get's employee's email address", () => {
    const employee = new Employee('Sydney', 2607127, 'sydney.walcoff@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test("get's employee's role", () => {
    const employee = new Employee('Sydney', 2607127, 'sydney.walcoff@gmail.com');

    expect(employee.getRole()).toBe('Employee');
});