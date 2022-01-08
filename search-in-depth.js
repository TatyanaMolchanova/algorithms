// ПОИСК В ШИРИНУ
// Time Complexity: O(V+E) where V is a number of vertices in the graph and E is a number of edges in the graph.

// QUEUE - структура данных, при которой элемент добавляется в конец, а удаляется из начала === FIFO - FIRST IN - FIRST OUT

const graph = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

let count = 0

function breadthSearch(graph, start, end) {
    let queue = []
    queue.push(start)
    while (queue.length > 0) {
        count += 1
        const current = queue.shift()
        if (!graph[current]) {
            graph[current] = []
        }
        if (graph[current].includes(end)) {
            return true
        } else {
            queue = [...queue, ...graph[current]]
        }
    }
    return false
}

// console.log(breadthSearch(graph, 'a', 's'))
console.log(breadthSearch(graph, 'a', 'e'))
console.log('count', count)