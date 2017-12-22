# About

Demonstrate Jest test results changing when run on Node.js 8 versus Node.js 6.

# Getting started

- `yarn install`

I'm using `nvm` to switch between node versions.

- `nvm use 8.9.3`
- `yarn test --no-cache`

The tests should all pass. Now with the latest node 6:

- `nvm use 6.12.2`

- `yarn test --no-cache`

The tests will fail with the following output:

```
$ jest --no-cache
 FAIL  ./index.test.js
  Delete globals
    ✓ Globals are initially unset (5ms)
    ✓ Globals can be set (2ms)
    ✕ Set only one global (5ms)
    ✕ Set the other global (1ms)

  ● Delete globals › Set only one global

    expect(received).not.toEqual(expected)

    Expected value to not equal:
      "bar"
    Received:
      "bar"

      23 |     expect(getter.getA()).toEqual(`baz`);
      24 |     // Value from `Globals can be set` test. This will fail in node 6, pass in node 8
    > 25 |     expect(getter.getB()).not.toEqual(`bar`);
      26 |   });
      27 |
      28 |   test(`Set the other global`, () => {

      at Object.test (index.test.js:25:31)

  ● Delete globals › Set the other global

    expect(received).not.toEqual(expected)

    Expected value to not equal:
      "baz"
    Received:
      "baz"

      30 |     expect(getter.getB()).toEqual(`quux`);
      31 |     // Value from `Set only one global` test. This will fail in node 6, pass in node 8
    > 32 |     expect(getter.getA()).not.toEqual(`baz`);
      33 |   });
      34 | });
      35 |

      at Object.test (index.test.js:32:31)

Test Suites: 1 failed, 1 total
Tests:       2 failed, 2 passed, 4 total
Snapshots:   0 total
Time:        1.745s
Ran all test suites.
```