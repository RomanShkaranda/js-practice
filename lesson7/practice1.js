// Task 1 — FizzBuzz
// Loop from 1 to 30. Print:
// "Fizz" if the number is divisible by 3
// "Buzz" if divisible by 5
// "FizzBuzz" if divisible by both 3 and 5
// the number itself if none of the above

// for (i = 1; i <= 30; i++){
//     // console.log(i)
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz')
//     } else if (i % 5 === 0) {
//         console.log('Buzz')
//     } else if (i % 3 === 0) {
//         console.log('Fizz')
//     } else {
//         console.log(i)
//     }
// }

// Task 2 — Countdown
// Using a while loop, print a countdown from 10 to 1, then print "Launch!" after the loop ends.

// let a = 10
// while (a != 0) {
//     console.log(a)
//     a--
//     if (a === 0) {
//         console.log('Launch!')
//     }
// }

// Task 3 — Sum until limit
// Using a do...while loop, keep adding numbers starting from 1 (1, 2, 3, 4...) until the sum exceeds 50. 
// Print the sum and the last number that was added.

// let i = 1
// let sum = 0
// do {
//     sum += i
//     i++
// } while (sum <= 50)

// console.log('Sum:', sum)
// console.log('Last number added:', i - 1)

// Task 4 — Multiplication table for one number
// Ask yourself: what number do you want the table for? Set let num = 7. Print the multiplication table for 
// that number from 1 to 10:
// 7 * 1 = 7
// 7 * 2 = 14
// ...
// But skip 7 * 5 using continue.

// let number = 7

// for (i = 1; i <= 10; i++) {
// let res = number * i
// if (res == 35) {
//     continue
// }
// console.log(`${number} * ${i} = ${res}`)
// }

// Task 5 — Find the first number
// Loop from 1 to 100. Find the first number that is divisible by both 6 and 7. Print it and stop the loop 
// immediately using break.


// for (i = 1; i <= 100; i++) {
//     if (i % 6 == 0 && i % 7 == 0 ){
//         break
//     }
// }