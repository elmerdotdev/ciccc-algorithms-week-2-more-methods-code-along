// split - Breaks a string into an array specified by a separator
const sentence = "Hello I am John Smith"
const words = sentence.split(" ") // separate each element by the space
console.log(words)

function isPalindrome(word) {
  const lowercase = word.toLowerCase() // racecar
  const letters = lowercase.split("") // ["r", "a", "c", "e", "c", "a", "r"]
  const reversed = letters.reverse()  // ["r", "a", "c", "e", "c", "a", "r"]
  const combined = reversed.join("") // racecar
  if (lowercase === combined) {
    return "It's a palindrome!!!"
  } else {
    return "No it's not a palindrome :("
  }
}

console.log(isPalindrome("Brother"))