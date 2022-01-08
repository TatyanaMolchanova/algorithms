// The factorial function (symbol: !) says to multiply all whole numbers from our chosen number down to 1.

// Examples:

// 4! = 4 × 3 × 2 × 1 = 24
// 7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040
// 1! = 1

const factorial = n => {
    if (n === 1) return 1

    return n * factorial(n - 1)
}

console.log('factorial(8)', factorial(8))

// Fibonacci The next number is found by adding up the two numbers before it:

// the 2 is found by adding the two numbers before it (1+1),
// the 3 is found by adding the two numbers before it (1+2),
// the 5 is (2+3),

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, ...

const fibonacci = n => {
    if (n === 1 || n === 2) return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log('fibonacci(8)', fibonacci(8))