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
  var nums = Array.from(Array(50).keys())
  for (var i = 0; i < 51; i++) {
    console.log(`Fizzbuzz result for ${nums[i]} is ${fizzBuzz(nums[i])}`);
  }
};

output();