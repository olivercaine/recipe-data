import { recipeEggsBenedict } from './recipes/classic-eggs-benedict/classic-eggs-benedict'
import { recipeCremeBrulee } from './recipes/creme-brulee/creme-brulee'
import * as types from './types'
import { tallyIngredientsForRecipePortions } from './utils'

const recipes: types.IRecipe[] = [
  recipeEggsBenedict,
  recipeCremeBrulee,
]

export {
  recipes, tallyIngredientsForRecipePortions as tallyIngredients, types
}

