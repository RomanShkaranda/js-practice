// Task 1 — Count Vowels
// You have let str = "JavaScript is awesome". Loop through it 
// and count how many vowels it contains (a, e, i, o, u — both lower and uppercase). 
// Print the count.

// let str = 'JavaScript is awesome'
// let arr = str.toLowerCase().split('')
// let count = 0
// let vovels = ['a', 'e', 'i', 'o', 'u']

// for (let i = 0; i <= str.length - 1; i++) {
//     if (vovels.includes(arr[i])) {
//         count += 1
//     }
// }

// console.log(count)

// Task 2 — Reverse a String
// You have let word = "hello". Using a loop, print it reversed — "olleh". You can't use any built-in 
// reverse method, build it manually with a variable let result = "".

// let str = 'hello'
// let result = ''

// for (let i = str.length - 1; i >= 0; i--) {
//     result = result + str[i]
// }

// console.log(result)

// Task 3 — Password Inspector
// You have let password = "myPass123!". Loop through it and count separately:
// digits (0–9)
// uppercase letters
// lowercase letters
// Print all three counts at the end.

// let password = 'QWEweoo123000'
// let uppercaseCount = 0
// let lowercaseCount = 0
// let numbersCount = 0

// for (let i = 0; i <= password.length - 1; i++) {
//     if (isNaN(password[i])) {
//         if (password[i] == password[i].toUpperCase()) {
//             uppercaseCount += 1
//         } else {
//             lowercaseCount += 1
//         }
//     } else {
//         numbersCount += 1
//     }
// }

// console.log('Uppercase counter: ', uppercaseCount)
// console.log('Lowercase counter: ', lowercaseCount)
// console.log('Number counter: ', numbersCount)

// Task 4 — Number Triangle
// Print this pattern using nested loops:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// Each row builds a string with numbers separated by spaces. 
// Hint: you'll need a loop inside a loop, and let row = "" like in the pyramid task.

// let row = ''

// for (let i = 1; i <= 5; i++) {
//     row = row + i + ' '
//     console.log(row)
// }

// Task 5 — Longest Word
// You have let sentence = "I love JavaScript because it is powerful". Split it into words using .split(" ") — this gives you an array of words. 
// Loop through them and find the longest one. Print it.
// Hint: you'll need a variable to track the current longest word as you go.

// let sentence = 'I love JavaScript because it is powerful'
// let splitedSentence = sentence.split(' ')
// let longestWord = ''

// for (let i = 0; i <= splitedSentence.length - 1; i++) {
//     if (longestWord.length < splitedSentence[i].length) {
//         longestWord = splitedSentence[i]
//     }
// }

// console.log(longestWord)
