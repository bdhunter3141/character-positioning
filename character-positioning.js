const indexFinder = function(str) {
  const newObject = {}
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  //values being an array of their indices
  for (let i = 0; i < alphabet.length; i++) {
    if (str.includes(alphabet[i])) {
      newObject[alphabet[i]] = alphabet[i]
    }
  }
  for (let letter in newObject) {
    let indices = [];
    let element = newObject[letter];
    let idx = str.indexOf(element);
    while (idx != -1) {
      indices.push(idx);
      idx = str.indexOf(element, idx + 1);
    newObject[letter] = indices
    }
  }
  return newObject
}


console.log(indexFinder("lighthouse in the house"))
