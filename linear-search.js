// ЛИНЕЙНЫЙ ПОИСК
// СЛОЖНОСТЬ O(n)

const array = [1, 3, 5, 8, 5, 1, 2, 7, 5, 2, 11]
let count = 0

function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (array[i] === item) {
            return i
        }
    }
    return null
}

// console.log(linearSearch(array, 8))
console.log(linearSearch(array, 11))
console.log('count', count)