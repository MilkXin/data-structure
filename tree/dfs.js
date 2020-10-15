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
                    val: 'e',
                    children: []
                },
                {
                    val: 'f',
                    children: []
                }
            ]
        }
    ]
}

// 深度优先
const dfs = (root) => {
    console.log(root.val)
    root.children.forEach(dfs)
}

dfs(tree)