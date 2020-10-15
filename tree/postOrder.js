const bt = require('./bt')

// 后序遍历
const postOrder = (root) => {
    if (!root) return
    postOrder(root.left)
    postOrder(root.right)
    console.log(root.val)
}

// 后序遍历 非递归版
const postOrder2 = (root) => {
    if (!root) return
    const outputStack = []
    const stack = [root]
    while (stack.length) {
        const n = stack.pop()
        outputStack.push(n)
        if (n.left) stack.push(n.left)
        if (n.right) stack.push(n.right)
    }

    while (outputStack.length) {
        const n = outputStack.pop()
        console.log(n.val)
    }
}

postOrder2(bt)