// Task 1 — && (both must be true)
// You have:
// let age = 20
// let hasTicket = true
// Print "You can enter" if the person is 18 or older and has a ticket. Otherwise print "Access denied".
// Test it with: age = 16, hasTicket = true — should deny. Then age = 20, hasTicket = false — should also deny.

let age1 = 10
let hasTicket = false

if (age1 > 18 && hasTicket === true) {
    console.log('You can enter')
} else {
    console.log('Access denied')
}

// Task 2 — || (at least one must be true)
// You have:
// let isWeekend = false
// let isHoliday = true
// Print "Day off" if it's a weekend or a holiday. Otherwise print "Work day".

let isWeekend = true
let isHoliday = true

if (isWeekend || isHoliday) {
    console.log('Day off')
} else {
    console.log('Work day')
}

// Task 3 — && and || together
// You have:
// let isMember = true
// let age = 17
// let hasParentPermission = true
// A person can enter a club if:
// they are 18 or older and a member
// or they are under 18 and a member and have parent permission
// Print "Welcome" or "Sorry, you can't enter".
// Test it with a few combinations and make sure all cases work correctly.

let isMember = true
let age = 20
let hasParentPermission = false

if (age > 18 && isMember) {
    console.log('Welcome')
} else if (age < 18 && isMember && hasParentPermission) {
    console.log('Welcome2')
} else {
    console.log('Sorry, you cannot enter')
}