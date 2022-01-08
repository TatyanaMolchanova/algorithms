// ДЕРЕВЬЯ
// A balanced tree has a time complexity of O(log n)

const tree = [
    {
        v: 5,
        c: [
            {
                v:10,
                c: [
                    {
                        v:11,
                    }
                ]
            },
            {
                v:7,
                c: [
                    {
                        v:5,
                        c: [
                            {
                                v:1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        v: 5,
        c: [
            {
                v:10
            },
            {
                v:15
            }
        ]
    }
]

// v field === value, c field === child
// Вычисляем сумму веток дерева рекурсивно
const recursive = tree => {
    let sum = 0;
    tree.forEach(node => {
        sum += node.v 
        if (!node.c) {
            return node.v
        }
        sum += recursive(node.c)
    })
    return sum
}

// console.log(recursive(tree))

// STACK - добавляем элемент в конец и извлекаем | удаляем с конца
// по принципу LIFO - LAST IN - FIRST OUT, как стопка блинчиков

// Вычисляем сумму веток дерева итеративно
const iteration = tree => {
    if (!tree.length) return 0
    let sum = 0
    let stack = []
    tree.forEach(node => stack.push(node));
    while (stack.length) {
        const node = stack.pop()
        sum += node.v
        if (node.c) {
            node.c.forEach(child => stack.push(child))
        }
    }

    return sum
}

console.log(iteration(tree))