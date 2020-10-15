const bt = require('./bt.js')

// 先序遍历
const preOrder = (root) => {
    if (!root) return
    console.log(root.val)
    preOrder(root.left)
    preOrder(root.right)
}

// 先序遍历 非递归版
const preOrder2 = (root) => {
    if (!root) return
    const stack = [root]
    while (stack.length) {
        const n = stack.pop()
        console.log(n.val)
        if (n.right) stack.push(n.right)
        if (n.left) stack.push(n.left)
    }
}

preOrder2(bt)