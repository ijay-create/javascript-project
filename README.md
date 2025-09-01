# JavaScript Utility Functions

This project is a collection of beginner-to-intermediate level JavaScript utility functions organized into three categories:

- String Manipulation

- Array Operations

- Mathematical Functions

It serves as a handy toolkit for learning and revising basic JavaScript concepts and functional programming techniques.

## File Overview

functions.js – Contains all implemented functions with example usage.


1. Function Categories
2. String Manipulation

reverseString(str)
Reverses the input string.
Example: "hello" → "olleh"

countCharacters(str)
Returns the number of characters in a string.
Example: "JavaScript" → 10

capitalizeWords(sentence)
Capitalizes the first letter of every word in a sentence.
Example: "hello world" → "Hello World"

## ARRAY FUNCTIONS

- findMax(arr)
Returns the maximum number in an array.
Example: [10, 3, 99, 42, 7] → 99

- findMin(arr)
Returns the minimum number in an array.
Example: [10, 3, 99, 42, 7] → 3

- sumArray(arr)
Returns the sum of all numbers in an array.
Example: [1, 2, 3, 4, 5] → 15

- filterArray(arr, conditionFunc)
Filters an array using a provided condition function.
Example: Filter even numbers:

- filterArray([1,2,3,4], n => n % 2 === 0) // → [2, 4]

## MATHEMATICAL FUNCTIONS

- factorial(n)
Returns the factorial of a number using recursion.
Example: factorial(5) → 120

- isPrime(n)
Checks whether a number is a prime number.
Examples:
isPrime(7) → true
isPrime(10) → false

- fibonacci(n)
Generates the first n numbers in the Fibonacci sequence.
Example: fibonacci(7) → [0, 1, 1, 2, 3, 5, 8]

## How to Use

You can run the file in any JavaScript environment:

## Option 1: 

- In Browser Console

- Open the browser and press F12 to open DevTools.

- Go to the Console tab.

- Paste the code into the console and run.


##  Option 2: 
With Node.js

- Save the code in a file called functions.js.

- Open terminal or command prompt.

- Run the file:

- node functions.js


## Author

[Mba Ijeoma]

[ijay-create]

This project is open for personal or educational use.
Feel free to modify or expand upon it.