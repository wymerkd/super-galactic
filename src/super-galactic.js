export class Age {
  constructor(earthYears) {
    this.earthYears = earthYears;
  }

  mercuryAge() {
    let mercury = Math.round(this.earthYears / .24);
    return mercury;
  }

  venusAge() {
    let venus = Math.round(this.earthYears / .62);
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
};
