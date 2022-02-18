const arr = [1, 8, 3, 4, 2, 6];

const analyzeArr = {
    avarage: (arr) => {
        let av = arr.reduce((acc, val) => {
            acc += val;
            return acc
        }, 0)
        return (av / arr.length);
    },

    min: (arr) => {
        return Math.min(...arr)
    },

    max: (arr) => {
        return Math.max(...arr)
    },

    length: (arr) => {
        return arr.length
    }
    
}

module.exports = analyzeArr