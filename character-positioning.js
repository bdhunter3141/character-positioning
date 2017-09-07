// return all the indices (zero-based positions) in the string where each character is found.
// So for each letter, we're no longer returning just one number to represent its number of occurrences,
// but rather (potentially) multiple numbers to represent all the places in the string that it shows up.




const indexFinder = function(str) {
  const newObject = {}
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  //values being an array of their indices
  for (var i = 0; i < alphabet.length; i++) {
    if (str.includes(alphabet[i])) {
      newObject[alphabet[i]] = ""
    }
  }
  //values being an array of their indices

  return newObject
}




console.log(indexFinder("lighthouse in the house"))







// create array of individual letters
// use array to loop through old array and find index



// const countLetters = function(str) {
//   const lettersObj = {}
//   for (let letter of str) {
//     if (str[letter]){
//   }
//   return lettersObj
// }

// console.log(countLetters("alsjfilewajklvhkagldjskflash"))


// const findLetters = function(str) {
//   const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//   let letterList = {}
//   for (let x = 0; x < alphabet.length; x++) {
//     for (let i = 0; i < str.length; i++) {
//       // console.log(str[i], alphabet[x])
//       if (str[i] === alphabet[x]) {
//         const pushLetter = str[i]
//         console.log(pushLetter)
//         letterList[pushLetter]
//       }
//     }
//   }
//   return letterList
// }

// console.log(findLetters("aksldhgksdaljfa"))