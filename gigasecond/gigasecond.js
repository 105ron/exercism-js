class Gigasecond {
  constructor(date) {
    this.inputDate = date;
  }

  date() {
    //copy date to prevent it being mutated.
    const date = new Date(this.inputDate);
    //convert result back into Date proto before returning it
    return new Date(date.setSeconds(date.getSeconds() + 1000000000));
  }
}

module.exports =  Gigasecond;