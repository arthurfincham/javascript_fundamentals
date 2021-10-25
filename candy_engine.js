const candies = [['Aero', 1.99], ['Skitties', 2.99], ['Maltesers', 3.49], ['Mars', 1.49], ['Skittles', 1.49], ['Starburst', 5.99], ['Ricola', 1.99], ['Polkagris', 5.99], ['Pastila', 4.99], ['Mentos', 8.99], ['Raffaello', 7.99], ['Gummi bears', 10.99], ['Fraise Tagada', 5.99]];

var checkPrice = (item, price) => {
  if ((item[1] < price) && (item[0].substring(0, string.length) == string)) {
    return item;
  }
};

function searchCandies(string, price){
  filtArr = candies.filter(obj => obj[0].substring(0, string.length) === string, obj => obj[1] > price);
  return filtArr.map(x => x[0])
};

console.log(searchCandies('Ma', 10));

console.log(searchCandies('S', 10));