
const calculator = require('./calculator');

it('adding', () => 
    expect(calculator.add(3, 4)).toBe(7)
)

it('substracting', () => {
    expect(calculator.substr(7, 1)).toBe(6)
})

it('multipla', () => {
    expect(calculator.multipla(3, 5)).toBe(15)
})

it('dividing', () => {
    expect(calculator.divide(15, 3)).toBe(5)
})