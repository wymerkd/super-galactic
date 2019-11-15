import { Age } from './../src/super-galactic.js';

describe('Age', () => {

  let userAge = new Age(29);
  let deathAge = new Age(71);

  test('should correctly create an age object with current age', () => {
    expect(userAge.earthYears).toEqual(29);
  });

  test('should correctly determine if age type is a number', () => {
    expect(typeof userAge.earthYears).toEqual('number');
  });

  test('should correctly divide user age by .24 to determine age on Mercury', () => {
    expect(userAge.mercuryAge()).toEqual(121);
  });

  test('should correctly divide user age by .62 to determine age on Venus', () => {
    expect(userAge.venusAge()).toEqual(47);
  });

  test('should correctly divide user age by 1.88 to determine age on Mars', () => {
    expect(userAge.marsAge()).toEqual(15);
  });

  test('should correctly divide user age by 11.86 to determine age on Jupiter', () => {
    expect(userAge.jupiterAge()).toEqual(2);
  });

  test('should correctly create an age object with life expectancy age', () => {
    expect(deathAge.lifeExpectancy).toEqual(71);
  });
});
