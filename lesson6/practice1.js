// Task 1 — Variables
// You have a variable username with value "Roman" and a variable age with value 22. Print this exact line to the console:
// My name is Roman and I am 22 years old
let name = 'Roman'
let age = 22

console.log('My name is ' + name + ' and I am ' + age + ' years old')
console.log(`My name is ${name} and I am ${age} years old`)

// Task 2 — Types
// Create a variable for each of these values: 42, "hello", true, null, undefined. Print the type of each one using typeof.
let num = 42
let str = 'hello'
let bool = true
let undef = undefined

console.log(typeof num, typeof str, typeof bool, typeof undef)


// Task 3 — Type Conversion
// You have a variable price = "49" (it's a string). Add 6 to it and print the result as a number — so the output must be 55, not "496".
let price = '49'
console.log(Number(price) + 6)


// Task 4 — Operators
// You have a = 17. Using only the % operator, print whether a is even or odd — the output should be either 0 (even) or 1 (odd).
let a = 17
let res = a % 2
if (res > 0) {
    console.log('Even!', res)
} else {
    console.log('Odd!', res)
}

if (res === 0) {
    console.log('Even!', res)
} else {
    console.log('Odd!', res)
}


// Task 5 — Branching
// You have a variable hour (a number from 0 to 23). Write code that prints:

// "Good night" for hours 0–5
// "Good morning" for hours 6–11
// "Good afternoon" for hours 12–17
// "Good evening" for hours 18–23

// Test it with hour = 14.

let hour = 5

if (hour >= 0 && hour <= 5) {
    console.log('Good night')
} else if (hour >= 6 && hour <= 11) {
    console.log('Good morning')
} else if (hour >= 12 && hour <= 17) {
    console.log('Good afternoon')
} else if (hour >= 18 && hour <= 23) {
    console.log('Good evening')
}  else {
    console.log('Nothing to show')
}