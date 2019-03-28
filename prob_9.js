// Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. 
// Numbers can be 0 or negative.

// For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

// Follow-up: Can you do this in O(N) time and constant space?


const largestNumber = (arr) => {
    let inc = 0
    let exc = 0
    let new_exc

    arr.forEach(el => {
        new_exc = exc > inc ? exc : inc
        inc = exc + el
        exc = new_exc
    })

  return exc > inc ? exc : inc
}

console.log(largestNumber([2, 4, 6, 5, 2, 18, 3]))
