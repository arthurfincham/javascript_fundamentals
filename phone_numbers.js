const numbers = [
  '17636873642',
  '47636873634',
  '78678678623',
  'AAAA#####AAAA#87@768767382672',
  '47673634',
  '47636873638'
];


var checkLength = (number) => {
  if (number.length <= 10){
    return number;
  }
};


function filterLongNumbers(input){
  return input.filter(checkLength);
};

