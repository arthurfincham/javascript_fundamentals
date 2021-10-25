const candies = [['Aero', 1.99], ['Skitties', 2.99], ['Maltesers', 3.49], ['Mars', 1.49], ['Skittles', 1.49], ['Starburst', 5.99], ['Ricola', 1.99], ['Polkagris', 5.99], ['Pastila', 4.99], ['Mentos', 8.99], ['Raffaello', 7.99], ['Gummi bears', 10.99], ['Fraise Tagada', 5.99]];

const searchCandies = (string, price) => {
  filtArr = candies.filter(obj => obj[0].substring(0, string.length) === string);
  finalArr = filtArr.filter(obj => obj[1] < price)
  return finalArr.map(x => x[0]);
};

module.exports = searchCandies;