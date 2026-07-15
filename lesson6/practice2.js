// Task 1 — == vs ===
// You have these variables:
// let a = 5
// let b = '5'
// let c = 5
// Print to the console:
// whether a and b are equal using ==
// whether a and b are equal using ===
// whether a and c are equal using ===
// Each console.log should print true or false.

let a = 5
let b = '5'
let c = 5

console.log(a == b)
console.log(a === b)
console.log(a === c)

// Task 2 — Assignment vs Comparison
// You have let score = 0. Write an if/else that prints "Winner" if score equals 100, and "Try again" otherwise. Test it with score = 100.
// Trap: there's one very common mistake beginners make inside the if condition here — avoid it.

let score = 100

if (score == 100) {
    console.log('Winner')
} else {
    console.log('Try again')
}

// Task 3 — Even/Odd (fixed)
// You have let number = 24. Print "even" if it's even, "odd" if it's odd. Make sure the logic is correct (remember your mistake from last time — % 2 === 0 means even).
// Then test it manually by changing number to 7 and make sure it still prints the right thing.

let number = 7

if (number % 2 == 0) {
    console.log('even')
} else {
    console.log('odd')
}