const drops = { 
  3: 'Pling',
  5: 'Plang',
  7: 'Plong'
}

const getFactors = number => {
  const factors = [];
  for (let i = 1; i <= number; i++) {
    if(number % i === 0) factors.push(i);
  }
  return factors;
}

class Raindrops {
  convert (number) {
    const factors = getFactors(number);
    const sound = factors.reduce( (accumulator, value) => 
       drops[value] ? accumulator += drops[value] : accumulator, '')
    return sound || number.toString();
  }
}

module.exports = Raindrops;