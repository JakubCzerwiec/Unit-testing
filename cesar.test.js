const cipher = require('./cesar');

it('all shifted', () => {
    expect(cipher('abc')).toBe('bcd')
})

it('z to a', () => {
    expect(cipher('z')).toBe('a')
})

it('punctation', () => {
    expect(cipher(',.?!;:')).toBe(',.?!;:')
})