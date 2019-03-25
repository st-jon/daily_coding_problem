// Given an array of integers, return a new array such that each element 
// at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. 
// If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?

// const reducer =  (a, b) => a*b

const prob2 = (arr) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let newArr = arr.filter(item =>  item !== arr[i])
        let resultAtIndex = newArr.reduce((a, b) => a*b)
        result.push(resultAtIndex)
    }
    return result
}

console.log(prob2([1, 2, 3, 4, 5]))

