const daysNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function daysInMonth(year, month) {
  month += 1;
  return new Date(year, month, 0).getDate();
}

function descriptorToNumber (year, month, descriptor) {
  const dictionary ={ 
    '1st': 1,
    '2nd': 8,
    '3rd': 15,
    '4th': 22,
    '5th': 29,
    teenth: 13
  };
  //if last then days is determined by daysInMonth function
  return dictionary[descriptor] || (daysInMonth(year, (month) ) - 6);
}

function meetupDay (year, month, day, descriptor) {
  const dayValue = daysNames.findIndex((e) => e === day);;
  let startValue = descriptorToNumber(year, month, descriptor);
  const maxValue = daysInMonth(year, month);
  for (let i = startValue; startValue <= maxValue; i ++) {
    if (dayValue === new Date(year, month, i).getDay() ) {
      return new Date(year, month, i);
    }
  }
  throw new Error();
}

module.exports = meetupDay;