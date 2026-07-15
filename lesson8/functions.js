// FUNCTION DECLARATION

// function greet() {
//     console.log('Hello from function')
// }

// greet()

// function greetWithName(name) {
//     console.log(`Hello ${name} from function`)
// }

// greetWithName('John')

// function sum(num1, num2) {
//     return num1 + num2
// }

// let sumResult = sum(2, 7)

// console.log(sumResult)


// function calculator(operation, num1, num2) {
//     if (operation === '+') {
//         return num1 + num2
//     }

//     if (operation === '-') {
//         return num1 - num2
//     }

//     if (operation === '*') {
//         return num1 * num2
//     }

//     if (operation === '/') {
//         return num1 / num2
//     }

// }

// console.log(calculator('/', 100, 20))


// FUNCTION EXPRESSION
// const pow = function(n) {
//     return n * n
// }
// console.log(pow(5))

// ARROW FUNCTION

// const pow = n => n * n

// console.log(pow(5))


// function greetWithName(name = 'Jon') {
//     console.log(`Hello ${name} from function`)
// }

// greetWithName('Ted')


// function sumAll(...nums) {

// }

// sumAll()
 
function handleCB(text, cb) {
    console.log(`Message from HOF`)
    cb(text)
}

function printInfo(text) {
    console.log(`Text from printinfo: ${text}`)
}

handleCB('String', printInfo)

// commit comment