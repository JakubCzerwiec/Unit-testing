const capital = require('./script')

it('capitalized', () => {
    expect(capital('bum')).toBe('Bum')
})