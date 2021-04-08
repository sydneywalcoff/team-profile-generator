const Intern = require('../lib/Intern');

test("creates intern object", () => {
    const intern = new Intern('Sydney', 2607127, 'sydney.walcoff@gmail.com', 'UC Davis');

    expect(intern.name).toBe('Sydney');
    expect(intern.id).toBe(2607127);
    expect(intern.email).toBe('sydney.walcoff@gmail.com');
    expect(intern.school).toBe('UC Davis');
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

