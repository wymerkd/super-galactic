import { Age } from './../src/super-galactic.js';

describe('Age', () => {

  test('should correctly create an age object with current age', () => {
    var userAge = new Age(29);
    expect(userAge.earthYears).toEqual(29);
  });
});
