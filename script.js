// String Transformations
// a. Capitalizes the first letter of a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


//b. reverses a string
function reverse(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

//c. Palindrome: checks if a string is a palindrome
function isPalindrome(str) {
  let word = "";
  for (let i = str.length - 1; i >= 0; i--) {
    word += str[i];
  }

  if (word === str) {
    return `${word} is a palindrome`;
  } else {
    return `${word} is not a palindrome`;
  }
}
