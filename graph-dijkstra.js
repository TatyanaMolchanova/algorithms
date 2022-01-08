// ПОИСК ДЕЙКСТРЫ
// Complexity: O(ElogV) where: V is the number of vertices
// E is the total number of edges

const graph = {}
graph.a = { b: 2, c: 1 }
graph.b = { f: 7 }
graph.c = { d: 5, e: 2 }
graph.d = { f: 2 }
graph.e = { f: 1 }
graph.f = { g: 1 }
graph.g = {}

function shortPath(graph, start, end) {
    const costs = {} // кратчайшие пути
    const processed = [] // те узлы, которые мы уже проверили
    let neighbors = {} // храним соседние вершины рассматриваемого узла
    Object.keys(graph).forEach(node => {
        // если текущая вершина итерации не равна стартовой, то мы будем заполнять значения
        if (node !== start) {
            // те узлы, до которых мы можем добраться, заполняем значениями value, а до которых не можем - заполняем бесконечно большим числом
            let value = graph[start][node] // получаем graph.a.b и т.п. значения
            costs[node] = value || 10000000 // складываем в объект кратчайших путей по заданной итерации значение, если оно есть, или бесконечное число в случае отсутствия значения
        }
    })
    console.log('costs', costs)
    let node = findNodeLowestCost(costs, processed) // поиск самой короткой вершины, в которую мы можем попасть из стартовой точки start - получаем объект с минимальной стоимостью
    console.log('node', node)
    while (node) { // будем крутить цикл, пока не обойдем весь граф
        const cost = costs[node]
        neighbors = graph[node]
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor]
            if (newCost < costs[neighbor]) { // если новая стоимость меньше этой стоимости, которая лежит в таблице этого узла, то эту стоимость необходимо перезаписать
                costs[neighbor] = newCost
            }
        })
        processed.push(node) //  обработанную вершину добавляем в массив обработанных вершин, чтобы исключить ее в дальнейшем из поиска
        node = findNodeLowestCost(costs, processed)
    }
    return costs
}

function findNodeLowestCost(costs, processed) {
    let lowestCost = 10000000
    let lowestNode;
    Object.keys(costs).forEach(node => {
        let cost = costs[node] // получаем стоимость текущей ноды
        // если стоимость текущей ноды меньше минимальной, которую мы определили в самом начале, и вершина на текущей итерации не находится в массиве обработанных вершин, то это значит, что мы нашли вершину, у которой путь короче, соответветственно, тогда мы переопределяем минимальную стоимость и ноду с наименьшим путем:
        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost 
            lowestNode = node
        }
    })
    return lowestNode
}

// console.log(breadthSearch(graph, 'a', 's'))
console.log(shortPath(graph, 'a', 'g'))