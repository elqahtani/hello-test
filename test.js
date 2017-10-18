const assert = require('assert')
const math = require('./index')


describe('math', () => {
  it('should returns 2 if input is 1', () => {
    assert.equal(math.add(1, 1), 2)
  })
})

// assert.equal(math.add(1, 2), 3)