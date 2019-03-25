// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

const sumUp = (arr, num) => {
    if (arr.length < 2) {
        return false
    }
    for (let i = 0; i <= arr.length-1; i++) {
        for (let j = 0; j <= arr.length-1; j++) {
            if (arr[i] + arr[j] === num) {
                return true
            }
        }
    }
    return false
}

console.log(sumUp([10, 15, 3, 7], 17))


function addUp(arr, k) {
    let rest = {}
    for (let value of arr) {
        if (rest[value]) { 
            return true
        } 
        else { 
            rest[k - value] = true 
        }
    }
    return false
}

console.log(addUp([10, 15, 3, 7], 17))