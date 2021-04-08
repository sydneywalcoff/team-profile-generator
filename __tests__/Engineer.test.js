const Engineer = require('../lib/Engineer');

test("creates engineer object", () => {
    const engineer = new Engineer('Sydney', 2607127, 'sydney.walcoff@gmail.com', 'sydneywalcoff');

    expect(engineer.name).toBe('Sydney');
    expect(engineer.id).toBe(2607127);
    expect(engineer.email).toBe('sydney.walcoff@gmail.com');
    expect(engineer.github).toBe('sydneywalcoff');
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test("get's engineer's role", () => {
    const engineer = new Engineer('Sydney', 2607127, 'sydney.walcoff@gmail.com', 'sydneywalcoff');

    expect(engineer.getRole()).toBe('Engineer');
    expect(engineer.getRole()).toEqual(expect.any(String));

});

test("get's engineer's github username", () => {
    const engineer = new Engineer('Sydney', 2607127, 'sydney.walcoff@gmail.com', 'sydneywalcoff');

    expect(engineer.getGithub()).toBe('sydneywalcoff');
    expect(engineer.getGithub()).toEqual(expect.any(String));
});