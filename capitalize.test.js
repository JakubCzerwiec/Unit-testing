const capital = require('./capitalization')

it('capitalized', () => {
    expect(capital('bum')).toBe('Bum')
})