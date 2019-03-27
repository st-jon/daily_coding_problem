// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

// For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

// You can assume that the messages are decodable. For example, '001' is not allowed.

const decode = (str) => {
    let result = []
    let chars = str.split('')
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] > 0) {
            result.push(chars[i])
        }
        if (chars[i] + chars[i + 1] <= 26) {
            result.push(chars[i] + chars[i + 1])
        }
    }
    return result.length
}

decode('12345')
