export class Age {
  constructor(earthYears) {
    this.earthYears = earthYears;
  }

  mercuryAge() {
    let mercury = Math.round(this.earthYears / .24);
    return mercury;
  }
};
