const getter = require("./index");

describe(`Delete globals`, () => {
  beforeEach(() => {
    delete global.__A__;
    delete global.__B__;
  });

  test(`Globals are initially unset`, () => {
    expect(typeof getter.getA()).toEqual(`undefined`);
    expect(typeof getter.getB()).toEqual(`undefined`);
  });

  test(`Globals can be set`, () => {
    global.__A__ = `foo`;
    global.__B__ = `bar`;
    expect(getter.getA()).toEqual(`foo`);
    expect(getter.getB()).toEqual(`bar`);
  });

  test(`Set only one global`, () => {
    global.__A__ = `baz`;
    expect(getter.getA()).toEqual(`baz`);
    // Value from `Globals can be set` test. This will fail in node 6, pass in node 8
    expect(getter.getB()).not.toEqual(`bar`);
  });

  test(`Set the other global`, () => {
    global.__B__ = `quux`;
    expect(getter.getB()).toEqual(`quux`);
    // Value from `Set only one global` test. This will fail in node 6, pass in node 8
    expect(getter.getA()).not.toEqual(`baz`);
  });
});
