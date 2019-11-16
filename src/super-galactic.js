export class Age {
  constructor(earthYears, lifeExpectancy) {
    this.earthYears = earthYears;
    this.lifeExpectancy = lifeExpectancy
  }

  mercuryAge() {
    let mercury = Math.round(this.earthYears / 0.24);
    return mercury;
  }

  venusAge() {
    let venus = Math.round(this.earthYears / 0.62);
    return venus;
  }

  marsAge() {
    let mars = Math.round(this.earthYears / 1.88);
    return mars;
  }

  jupiterAge() {
    let jupiter = Math.round(this.earthYears / 11.86);
    return jupiter;
  }

  earthLife() {
    let earthDeath = this.lifeExpectancy - this.earthYears;
    return earthDeath;
  }
};
