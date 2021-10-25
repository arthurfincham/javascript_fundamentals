const fizzBuzz = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz'
  } else if (number % 3 === 0){
    return 'Fizz'
  } else if (number % 5 === 0){
    return 'Buzz'
  } else {
    return number
  }
};

function output(){
  var nums = Array.from({length: 51}, (_, i) => i + 1)
  for (var i = 0; i < 51; i++) {
    console.log(`${fizzBuzz(nums[i])}`);
  }
};

output();

module.exports = fizzBuzz;
