// Task 1 — Number Analyzer
// You have let num = 42. Print all of these in separate console.log calls:
// whether it's even or odd
// whether it's positive, negative, or zero
// whether it's divisible by both 3 and 7

// let num = 21

// if (num % 2 === 0) {
//     console.log('Even')
// } else {
//     console.log('Odd')
// }

// if (num === 0) {
//     console.log('It is zero')
// } else if (num < 0) {
//     console.log('It is negative')
// } else {
//     console.log('It is possitive')
// }

// if (num % 3 === 0 && num % 7 ===0) {
//     console.log('It\'s divisible by both 3 and 7')
// }


// Task 2 — Loop with let
// Print all numbers from 1 to 20 that are not divisible by 3. Use continue and make sure you declare 
// let i inside the for loop.

// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0) {
//         continue
//     }
//     console.log(i)
// }

// Task 3 — Grade Counter
// You have these grades: 85, 42, 91, 67, 55, 78, 33, 95. Loop through them and count how many 
// are passing (60 and above) and how many are failing. Print both counts at the end.

// let arr = [85, 42, 91, 67, 55, 78, 33, 95]
// let failCounter = 0
// let passCounter = 0

// for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] >= 60) {
//         passCounter += 1
//         console.log(arr[i], 'passed')
//     } else {
//         failCounter += 1
//         console.log(arr[i], 'fail')
//     }
// }

// console.log(passCounter)
// console.log(failCounter)

// Task 4 — Password Strength
// You have let password = "hello2World". Loop through it and count uppercase letters. Then:
// less than 1 uppercase → "Weak"
// 1 uppercase → "Medium"
// 2 or more → "Strong"
// Hint: to check if a character is uppercase compare it with its toUpperCase() version.



// Task 5 — Pyramid
// Print this pattern using a loop:
// *
// **
// ***
// ****
// *****
// Each line has one more * than the previous. Use a variable let row = "" and add "*" to it each iteration.

// let row = ''


// for (let i = 1; i <= 5; i++) {
//     row = row + '*'
//     console.log(row)
// }
