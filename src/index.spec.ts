import { expect } from 'chai'
import { recipes } from '.'

describe('Index', () => {
  it('Should contain one recipe', () => {
    expect(recipes.length).to.equal(1)
  })
})
