// A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

// Given the root to a binary tree, count the number of unival subtrees.

// For example, the following tree has 5 unival subtrees:

//    0
//   / \
//  1   0
//     / \
//    1   0
//   / \
//  1   1


class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    isUnivalTree(node) {
        if (node.left === null && node.right === null) {
            return true
        }
        if (node.value === node.left.value && node.value === node.right.value) {
            return true
        }
        return false
    }

    countUnivalTree() {
        let data = [],
            queue = [],
            node = this.root

        queue.push(node)

        while(queue.length) {
            node = queue.shift()
            let uniTree = this.isUnivalTree(node)
            if (uniTree) {
                data.push(node)
            }

            if(node.left) {
                queue.push(node.left)
            }
            if(node.right) {
                queue.push(node.right)
            }
        }

        return data.length
    }
}

let tree = new BinaryTree()
let itemZero = new Node(0)
let itemZeroTwo = new Node(0)
let itemZeroThree = new Node(0)
let itemOne = new Node(1)
let itemOneTwo = new Node(1)
let itemOneThree = new Node(1)
let itemOneFour = new Node(1)

tree.root = itemZero
tree.root.left = itemZeroTwo
tree.root.right = itemOne
tree.root.right.right = itemZeroThree
tree.root.right.left = itemOneTwo
tree.root.right.left.right = itemOneThree
tree.root.right.left.left = itemOneFour

console.log(tree.countUnivalTree())
