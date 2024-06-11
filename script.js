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

//d. counts the number of words in a string
function wordCount(str) {
  let count = 0;
  for (let i of str) {
    count += 1;
  }
  return count;
}

//2. Array Transformations
// a. doubles every number in an array
arr = [2, 3, 4];
const doubleArr = arr.map(i => i * 2);

// b. filters out even numbers from an Array
const filterArray = arr.filter(i => {
  if (i % 2 === 0) {
    return i;
  }
});
