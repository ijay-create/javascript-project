// -----------------------------
// STRING MANIPULATION FUNCTIONS
// -----------------------------

// 1. Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log("Reverse String:", reverseString("hello")); // "olleh"

// 2. Count Characters
function countCharacters(str) {
  return str.length;
}
console.log("Character Count:", countCharacters("JavaScript")); // 10

// 3. Capitalize Words
function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
console.log("Capitalize Words:", capitalizeWords("hello world from javascript"));
// "Hello World From Javascript"


// -----------------------------
// ARRAY FUNCTIONS
// -----------------------------

// 4. Find Maximum
function findMax(arr) {
  return Math.max(...arr);
}

const sampleArray = [10, 3, 99, 42, 7];
console.log("Max:", findMax(sampleArray)); // 99

// 5. Find Minimum
function findMin(arr) {
  return Math.min(...arr);
}

const sampleArray1 = [10, 3, 99, 42, 7];
console.log("Min:", findMin(sampleArray)); // 3

// 6. Sum of Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log("Sum of Array:", sumArray([1, 2, 3, 4, 5])); // 15

// 7. Filter Array
function filterArray(arr, conditionFunc) {
  return arr.filter(conditionFunc);
}
const nums = [1, 2, 3, 4, 5, 6];
const evens = filterArray(nums, n => n % 2 === 0);
console.log("Filtered Array (even):", evens); // [2, 4, 6]


// -----------------------------
// MATHEMATICAL FUNCTIONS
// -----------------------------

// 8. Factorial
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5)); // 120

// 9. Prime Number Check
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log("Is 7 prime?", isPrime(7));  // true
console.log("Is 10 prime?", isPrime(10)); // false

// 10. Fibonacci Sequence
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib.slice(0, n);
}
console.log("Fibonacci(7):", fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]

