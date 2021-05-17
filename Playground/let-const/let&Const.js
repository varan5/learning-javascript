// TASK: LEARNING ABOUT LET AND CONST

// 1. Difference between let and const

    // 'let' is used, when the value of a variable may CHANGE in future
    // 'const' is used, when the value of a variable will NOT CHANGE in future


// 2. Which is more efficient to use ?

    // It is better to use 'const', because if the value will not change in future,
    // then it will be optised by the interpreter

    
// 3. Examples

const API_KEY = 'ddsorjjsfkjnnwkrrfos' // value will not change in future
const userName = 'Tommy Vercetti'

let counter = 0 // value is changing
counter += 5
