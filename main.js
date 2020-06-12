function add(x, y){
    return x + y
}

console.log('add', add(4, 3))

function multiply(x, y){
    let count = 0
    for (let step = 0; step < x; step++){
       count = add(count, y)
    }
    return count
}

console.log('multiply', multiply(6, 4))
console.log('Next Ex.', multiply(7, 7))

function power(x, y){
    let count2 = 1
    for (let step = 0; step < y; step++){
        count2 = multiply(count2, x)
    }
    return count2
}

console.log('exponent', power(2, 3))
console.log('ex two', power(2,8))

function factorial(x){
    //x * x - 1 * x - 1....

    let count3 = 1
    for (let step = 1; step <= x; step++){
        count3 = multiply(step, count3)
    }
    return count3
}

console.log('!', factorial(5))

function fibonacci(x){
    
}
//let numberOfLoops = x
// let multiply = for (let step = 0; step < numberOfLoops; y++){
//     console.log(multiply)
// }

// let multiplyTwo = for (let step = 0; step < numberOfLoops; x++)