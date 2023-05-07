import { recipeEggsBenedict } from './recipes/classic-eggs-benedict/classic-eggs-benedict'
import { recipeCremeBrulee } from './recipes/creme-brulee/creme-brulee'
import * as types from './types'

const recipes: types.IRecipe[] = [
  recipeEggsBenedict,
  recipeCremeBrulee,
]

export {
  recipes,
  types
}
