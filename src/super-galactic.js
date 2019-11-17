const mercuryYear = 0.24;
const venusYear = 0.62;
const marsYear = 1.88;
const jupiterYear = 11.86;

export class Age {
  constructor(earthYears, lifeExpectancy) {
    this.earthYears = earthYears;
    this.lifeExpectancy = lifeExpectancy
  }

  mercuryAge() {
    return Math.round(this.earthYears / mercuryYear);
  }

  venusAge() {
    return Math.round(this.earthYears / venusYear);
  }

  marsAge() {
    return Math.round(this.earthYears / marsYear);
  }

  jupiterAge() {
    return Math.round(this.earthYears / jupiterYear);
  }

  earthLife() {
    return this.lifeExpectancy - this.earthYears;
  }

  mercuryLife() {
    return Math.round((this.lifeExpectancy - this.earthYears) / mercuryYear);
  }

  venusLife() {
    return Math.round((this.lifeExpectancy - this.earthYears) / venusYear);
  }

  marsLife() {
    return Math.round((this.lifeExpectancy - this.earthYears) / marsYear);
  }

  jupiterLife() {
    return Math.round((this.lifeExpectancy - this.earthYears) / jupiterYear);
  }

  yearsPastExpectancy() {
    if (this.earthYears > this.lifeExpectancy) {
      return this.earthYears - this.lifeExpectancy;
    }
  }
};
