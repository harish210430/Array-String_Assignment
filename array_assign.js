// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];
let str = "satyam shivam sundaram";
/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers.
numbers.indexOf(101);

// - Find the last index of `9` in numbers
numbers.lastIndexOf(9);

// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "));

// - Add two new words in the strings array "called" and "sentance"
console.log(strings.push("called", "sentance"));

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(" "));

// - Remove the first word in the array (strings)
[...strings].shift();

// - Find all the words that contain 'is' use string method 'includes'.

console.log(strings); // ['This', 'is', 'a', 'collection', 'of', 'words', 'called', 'sentance']

for(str of strings) {
    if(str.includes('is'))
        console.log(str);
}

strings.map((str) => {
    if(str.includes('is')) {
        return str;
    }
});

strings.forEach((str) => {
    if(str.includes('is'))
        console.log(str);
})

// @@- Find all the words that contain 'is' use string method 'indexOf'.
for(let str of strings) {
    console.log((str.indexOf(str.includes('is'))));
}

// - Check if all the numbers in numbers array are divisible by three use array method (every).
numbers.every((num) => {
    return num % 1 === 0;
});

// -  Sort Array from smallest to largest.
[...numbers].sort((a, b) => {
    return a - b;
});

// OR
[...numbers].sort((a,b)=>a-b);

// - Remove the last word in strings.
strings.pop();

// - Find largest number in numbers.
let sortedNum = [...numbers].sort((a, b) => b - a);
sortedNum[0];

// - Find longest string in strings.
let longestStr = [...strings].sort((a, b) => {
    return b.length - a.length;
});
console.log(longestStr[0]);

// - Find all the even numbers.
[...numbers].filter((num) => num % 2 === 0);

// - Find all the odd numbers.
[...numbers].filter((num) => num % 2 != 0);

// - Place a new word at the start of the array use (unshift).
[...strings].unshift("Today");

// - Make a subset of numbers array [18,9,7,11].
[...numbers].slice(3, 7);

// - Make a subset of strings array ['a','collection'].
[...strings].slice(2, 4);

// - Replace 12 & 18 with 1221 and 1881.
[...numbers].splice(1,1,1221);
[...numbers].splice(3,1,1881);

// Or
numbers[numbers.indexOf(12)] = 1221;
numbers[numbers.indexOf(18)] = 1881;

// - Replace words in strings array with the length of the word


// - Find the sum of the length of words using above question.


// - Customers Array
var customers = [
    { firstname: 'Joe', lastname: 'Blogs' },
    { firstname: 'John', lastname: 'Smith' },
    { firstname: 'Dave', lastname: 'Jones' },
    { firstname: 'Jack', lastname: 'White' },
  ];
  // - Find all customers whose firstname starts with 'J'.
  for(let customer of customers) {
    if(customer.firstname.startsWith('J'))
        console.log(customer.firstname + " " + customer.lastname);
  }

  // - Create new array with only first name.
  let onlyFirstNames = [];
  for(let customer of customers) {
    onlyFirstNames.push(customer.firstname);
  }
  console.log(onlyFirstNames);

  // - Create new array with all the full names (ex: "Joe Blogs").
  let fullName = [];
  for(let customer of customers) {
    fullName.push(customer.firstname + " " + customer.lastname);
  }

  // - Sort the array created above alphabetically
fullName.sort();

// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowelInFirstName = [];
for(let customer of customers) {
    if(
        customer.firstname.includes("a") ||
        customer.firstname.includes("e") ||
        customer.firstname.includes("i") ||
        customer.firstname.includes("o") ||
        customer.firstname.includes("u") 
     ) {
        vowelInFirstName.push(customer.firstname);
    } 
}
console.log(vowelInFirstName);

