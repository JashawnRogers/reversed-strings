function solution(str){
  // create new array variable to hold reversed string
  const reversedString = []
  // convert str to array
  const strArray = str.split('');
  // iterate through strArray
  strArray.forEach(letter => {
    // add each letter of str to beginning of new reversed string array
    reversedString.unshift(letter);
  })
  // join string together when finished
  // return new reversed string
  return reversedString.join('');
}
