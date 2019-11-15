import { Age } from './../src/super-galactic.js';

describe('Age', () => {

  test('should correctly create an age object with current age', () => {
    let userAge = new Age(29);
    expect(userAge.earthYears).toEqual(29);
  });

  test('should correctly determine if age type is a number', () => {
    let ageType = new Age(29);
    expect(typeof ageType.earthYears).toEqual('number');
  });

  test('should correctly divide user age by .24 to determine age on Mercury', () => {
    var userAge = new Age(29);
    expect(userAge.mercuryAge()).toEqual(121);
  });
});
