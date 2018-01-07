const hoursInDay = 24;
const minutesInHour = 60
const formatHours = hours => ( hours < 10 ? `0${ hours }` : (hours === hoursInDay) ? `00` : `${ hours }`)
const formatMinutes = minutes => ( minutes < 10 ? `0${ minutes }` : minutes )
const formatTime = time => (`${ formatHours(time.hours) }:${ formatMinutes(time.minutes)}`)
const roundTime = (hrs, mins) => {
  const minutes = mins % minutesInHour;
  const hours = (hrs + Math.floor(mins / minutesInHour)) % hoursInDay; 
  return {
    hours: hours < 0 ? hoursInDay + hours : hours,
    minutes: minutes < 0 ? minutesInHour + minutes : minutes 
  }
}

class Clock {
  constructor (hrs, mins) {  
    this.time = roundTime(hrs, mins)
  }

  toString () {
    return formatTime(this.time);
  }
  
  plus (mins) {
    this.time = roundTime(this.time.hours, this.time.minutes + mins)
    return this;
  }

  minus (mins) {
    this.time = roundTime(this.time.hours, this.time.minutes - mins)
    return this;
  }

  equals (clockTwo) {
    return this.toString() === clockTwo.toString()
  }
}

exports.at = (hours, minutes = 0) => new Clock(hours, minutes)