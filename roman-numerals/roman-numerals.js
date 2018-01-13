const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
toRoman = (number) => (
  decimal.map( (value ) => {
    const result = Math.floor(number / value);
    number %= value;
    return result;
  }).reduce( (accumulator, value, index) => (
    accumulator += roman[index].repeat(value) 
  ),'') 
)

module.exports = toRoman;