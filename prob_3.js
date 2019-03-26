// Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, 
// and deserialize(s), which deserializes the string back into the tree.

// For example, given the following Node class

// class Node:
//     def __init__(self, val, left=None, right=None):
//         self.val = val
//         self.left = left
//         self.right = right
// The following test should pass:

// node = Node('root', Node('left', Node('left.left')), Node('right'))
// assert deserialize(serialize(node)).left.left.val == 'left.left'

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

    insert(val) {
        let item = new Node(val)

        if (this.root === null) {
            this.root = item
            return this
        }
        if (this.root === item) {
            return this
        }
        else {
            let current = this.root
            while(true) {
                if (item.value === current.value) {
                    return this
                }
                if (item.value > current.value) {
                    if (current.right === null) {
                        current.right = item
                        return this
                    } else {
                        current = current.right
                    }
                }
                else if (item.value < current.value) {
                    if (current.left === null) {
                        current.left = item
                        return this
                    } else {
                        current = current.left
                    }
                }
            }   
        }
    }
    serialize() {
        let values = []
        let helper = (node) => {
            if (!node) {
                values.push("?")
            } else {
                values.push(node.value.toString())
                helper(node.left)
                helper(node.right)
            }
        }
        helper(this.root)
        return values.join(',')
    }
    deserialize(str) {
        let result = str.spit(',')
        var index = 0
        const deserializer = (arr) => {
            if (index > arr.length || arr[index] === '?'){
                return null
            }
            
            var node = new Node(parseInt(arr[index]))
            index++
            node.left = deserializer(arr,index)
            index++
            node.right = deserializer(arr, index)
            return node
        }
        return deserializer(result)
    }
}