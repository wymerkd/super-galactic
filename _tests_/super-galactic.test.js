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

  test('should correctly divide user age by .62 to determine age on Venus', () => {
    var userAge = new Age(29);
    expect(userAge.venusAge()).toEqual(47);
  });

  test('should correctly divide user age by 1.88 to determine age on Mars', () => {
    var userAge = new Age(29);
    expect(userAge.marsAge()).toEqual(15);
  });

  test('should correctly divide user age by 11.86 to determine age on Jupiter', () => {
    var userAge = new Age(29);
    expect(userAge.jupiterAge()).toEqual(2);
  });
});
