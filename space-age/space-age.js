class SpaceAge {
  constructor (age) {
    this.seconds = age;
  }
  onEarth () {
    return Math.round(this.seconds / 315576) / 100;
  }

  earthNotRounded () {
    return this.seconds / 31557600;
  }

  onMercury () {
    return Math.round(this.earthNotRounded() / 0.002408467) /100;
  }

  onVenus () {
    return Math.round(this.earthNotRounded() / 0.0061519726) /100;
  }

  onMars () {
    return Math.round(this.earthNotRounded() / 0.018808158) /100;
  }

  onJupiter () {
    return Math.round(this.earthNotRounded() / 0.11862615) /100;
  }

  onSaturn () {
    return Math.round(this.earthNotRounded() / 0.29447498) /100;
  }

  onUranus () {
    return Math.round(this.earthNotRounded() / 0.84016846) /100;
  }

  onNeptune () {
    return Math.round(this.earthNotRounded() / 1.6479132) /100;
  }
}

module.exports = SpaceAge;