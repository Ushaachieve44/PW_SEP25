const str = "ushaaa";
const wordToFind = "a";
function countOccurrences(str, word) {
  let count = 0;
  let startIndex = 0;


  while (true) {
    const foundIndex = str.indexOf(word, startIndex);
    if (foundIndex === -1) {
      break; 
    }
    count++;
    startIndex = foundIndex + word.length; 
  }
  return count;
}
const count = countOccurrences(str, wordToFind);

console.log(Theword `${wordToFind}`,appears `${count}`);