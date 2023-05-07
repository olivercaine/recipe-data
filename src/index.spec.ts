import { expect } from 'chai'
import { recipes } from '.'

describe('Index', () => {
  it('Should contain two recipes', () => {
    expect(recipes.length).to.equal(2)
  })
})
