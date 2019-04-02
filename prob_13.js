// Given an integer k and a string s, find the length of the longest substring 
// that contains at most k distinct characters.

// For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".

function isValid(subString, k) {
    return new Set(subString.split('')).size <= k
  }

const longuestSubStr = (k, s) => {
    let maxS = currS = 0
    let maxE = currE = k

    while (currE !== s.length) {
        currE += 1
        if ( currE - currS > maxE - maxS) {
            if (isValid(s.slice(currS, currE), k)) {
                maxS = currS
                maxE = currE
            } else {
                currS += 1
            } 
        }
    }
    return maxE - maxS
}

console.log(longuestSubStr(2, "abcbabbaabcdufo"))