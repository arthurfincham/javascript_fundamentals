const numbers = [
  '1763687364',
  '4763687334',
  '7867868623',
  'AAAA#####AAAA#87@768767382672',
  '4767363334',
  '4763687338'
];


var checkLength = (number) => {
  if (number.length <= 10){
    return number;
  }
};


function filterLongNumbers(input){
  return input.filter(checkLength);
};

console.log(filterLongNumbers(numbers));