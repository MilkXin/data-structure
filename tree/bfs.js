const tree = {
    val: 'a',
    children: [
        {
            val: 'b',
            children: [
                {
                    val: 'd',
                    children: []
                },
                {
                    val: 'e',
                    children: []
                }
            ]
        },
        {
            val: 'c',
            children: [
                {
                    val: 'f',
                    children: []
                },
                {
                    val: 'g',
                    children: []
                }
            ]
        }
    ]
}

// 广度优先
const bfs = (root) => {
    const q = [root]
    while (q.length) {
        const n = q.shift()
        console.log(n.val)
        n.children.forEach(child => q.push(child))
    }
}

bfs(tree)