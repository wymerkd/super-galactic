export class Age {
  constructor(earthYears, lifeExpectancy) {
    this.earthYears = earthYears;
    this.lifeExpectancy = lifeExpectancy
  }

  mercuryAge() {
    return Math.round(this.earthYears / 0.24);
  }

  venusAge() {
    return Math.round(this.earthYears / 0.62);
  }

  marsAge() {
    return Math.round(this.earthYears / 1.88);
  }

  jupiterAge() {
    return Math.round(this.earthYears / 11.86);
  }

  earthLife() {
    return this.lifeExpectancy - this.earthYears;
  }

  mercuryLife() {
    return Math.round((this.lifeExpectancy - this.earthYears) / 0.24);
  }

  venusLife() {
    return Math.round((this.lifeExpectancy - this.earthYears) / 0.62);
  }

  marsLife() {
    return Math.round((this.lifeExpectancy - this.earthYears) / 1.88);
  }

  jupiterLife() {
    return Math.round((this.lifeExpectancy - this.earthYears) / 11.86);
  }
};
