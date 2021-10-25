const namesAndDiscounts = [
  ['Anna', 50],
  ['Laura', 40],
  ['Josh', 30],
  ['Min', 50],
  ['Karla', 60]
];

function generateMessages(arr){
   return arr.map(x => `Hi ${x[0]}! ${x[1]} off our best candies for you today!`);
  };

console.log(generateMessages(namesAndDiscounts));