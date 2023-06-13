import { IRecipe } from './types'

export interface IRecipePortionCount { recipe: IRecipe, servings: number }

/**
 * Takes a record containing recipes and portion counts and returns a record of ingredients and their counts
 *
 * @param recipePortions A record of recipes where the key is the recipe id, and value is an object { recipe, servings: number }
 * @returns { '934bbf3c-db3c-11ed-afa1-0242ac120001': 5, '934bbf3c-db3c-11ed-afa1-0242ac120004': 4 }
 *
 * @example
 * ```
 * const recipePortions: Record<string, IRecipePortionCount> = {}
 * recipePortions[recipes[0].uid] = { recipe: recipe1, servings: 2 }
 * recipePortions[recipes[1].uid] = { recipe: recipe2, servings: 3 }
 * const ingredientCounts = tallyIngredients(recipePortions)
 * ```
 */
export const tallyIngredientsForRecipePortions = (recipePortions: Record<string, IRecipePortionCount>): Record<string, number> => {
  const ingredientCounts: Record<string, number> = {}
  for (const recipePortionKey in recipePortions) {
    const recipeServings = recipePortions[recipePortionKey]
    if (recipeServings.recipe.ingredients) {
      for (let index = 0; index < recipeServings.recipe.ingredients.length; index++) {
        const ingredient = recipeServings.recipe.ingredients[index]
        if (ingredientCounts[ingredient.uid] !== undefined) {
          ingredientCounts[ingredient.uid] += recipeServings.servings
        } else {
          ingredientCounts[ingredient.uid] = recipeServings.servings
        }
      }
    }
  }
  return ingredientCounts
}
