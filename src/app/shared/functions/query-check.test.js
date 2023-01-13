const queryCheck = require("./queryCheck");


describe('queryCheck', () => {
  test('returns the correct number for a valid query', () => {
      const query = 'sort=3&view=1&search=анч';
      const param = 'sort';
      const result = queryCheck(query, param);
      expect(result).toBe(3);
  });
});