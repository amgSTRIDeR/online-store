const queryCheck = require("./queryCheck");


describe('queryCheck', () => {
  test('returns the correct number for a valid query', () => {
    const query = 'sort=3&view=1&search=анч';
    const param = 'sort';
    const result = queryCheck(query, param);
    expect(result).toBe(3);
  });

  test('returns 0 for an invalid query', () => {
    const query = 'sort=3&view=asd&search=анч';
    const param = 'view';
    const result = queryCheck(query, param);
    expect(result).toBe(0);
  });

  test('returns 0 for a query without the given parameter', () => {
    const query = 'sort=3&view=1&search=анч';
    const param = 'card';
    const result = queryCheck(query, param);
    expect(result).toBe(0);
  });

  test('returns 0 for a negative number', () => {
    const query = 'sort=-3&view=1&search=анч';
    const param = 'sort';
    const result = queryCheck(query, param);
    expect(result).toBe(0);
  })

  test('returns 0 for a non-integer number', () => {
    const query = 'sort=3&view=1.1&search=анч';
    const param = 'view';
    const result = queryCheck(query, param);
    expect(result).toBe(0);
  })
});