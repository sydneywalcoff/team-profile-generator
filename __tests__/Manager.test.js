const Manager = require('../lib/Manager');

test("creates manager object", () => {
    const manager = new Manager('Sydney', 2607127, 'sydney.walcoff@gmail.com', 12);

    expect(manager.name).toBe('Sydney');
    expect(manager.id).toBe(2607127);
    expect(manager.email).toBe('sydney.walcoff@gmail.com');
    expect(manager.officeNumber).toBe(12);
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("get's manager's role", () => {
    const manager = new Manager('Sydney', 2607127, 'sydney.walcoff@gmail.com', 12);

    expect(manager.getRole()).toBe('Manager');
});