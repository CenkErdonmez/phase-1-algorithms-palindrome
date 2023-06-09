function isPalindrome(word) {
  // Convert the word to lowercase
  word = word.toLowerCase();

  // Initialize pointers for the start and end of the word
  let start = 0;
  let end = word.length - 1;

  // Iterate until the pointers meet in the middle
  while (start < end) {
    // If the characters at the pointers are not the same, it's not a palindrome
    if (word[start] !== word[end]) {
      return false;
    }

    // Move the pointers inward
    start++;
    end--;
  }

  // All characters matched, it's a palindrome
  return true;
}


/* 
  1. Convert the word to lowercase
2. Initialize a start pointer at the beginning of the word (index 0)
3. Initialize an end pointer at the end of the word (index word.length - 1)
4. Iterate while the start pointer is less than the end pointer
    5. If the characters at the start and end pointers are not the same, return false
    6. Move the start pointer one step forward
    7. Move the end pointer one step backward
8. All characters matched, return true

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
