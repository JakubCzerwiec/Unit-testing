const analyzeArr = require('./arr');

it('avarage', () => {
    expect(analyzeArr.avarage([1, 8, 3, 4, 2, 6])).toBe(4)
});

it('min', () => {
    expect(analyzeArr.min([1, 8, 3, 4, 2, 6])).toBe(1)
})

it('max', () => {
    expect(analyzeArr.max([1, 8, 3, 4, 2, 6])).toBe(8)
})

it('length', () => {
    expect(analyzeArr.length([1, 8, 3, 4, 2, 6])).toBe(6)
})