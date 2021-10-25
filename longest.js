names = ['Arthur', 'Fleur', 'Leo', 'Holly']

function findLongest(names){
  var longest = 0
  for (var i = 0; i < names.length; i++){
    if(names[i].length > longest){
      longest = names[i]
    }
  }
  return longest;
}

console.log(findLongest(names));