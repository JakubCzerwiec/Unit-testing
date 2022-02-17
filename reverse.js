const sentence = 'To be or not to be';

function reverseFun(x) {
    let splitStr = x.split('');
    let reverseArr = splitStr.reverse();
    let joinArr = reverseArr.join('');
    return joinArr
}

module.exports = reverseFun