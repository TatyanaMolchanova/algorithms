// КЭШИРОВАНИЕ
// 

function cacheFunction(fn) {
    const cache = {}
    return function(n) {
        if (cache[n]) {
            console.log('Is taken from cache ', cache[n])
            return cache[n]
        }
        let result = fn(n)
        console.log('Is calculated from function ', result)
        cache[n] = result
        return result
    }
}

function factorial(n) {
    let result = 1
    while (n != 1) {
        result *= n
        n -= 1
    }
    return result
}

console.log(factorial(5))

const cacheFactorial = cacheFunction(factorial)

cacheFactorial(5)
cacheFactorial(4)
cacheFactorial(3)
cacheFactorial(4)
cacheFactorial(5)
cacheFactorial(1)