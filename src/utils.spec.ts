import { expect } from 'chai'
import { IRecipe } from './types'
import { IRecipePortionCount, tallyIngredientsForRecipePortions } from './utils'

describe('Given two recipes', () => {
  describe('When tallying ingredients for a specific number of servings', () => {
    it('Then should be able to tally number of ingredients', () => {
      // Given
      const recipes: IRecipe[] = [
        {
          ingredients: [
            {
              label: '4 Tablespoon Olive oil for frying',
              title: '4 Tablespoon Olive oil for frying',
              uid: '934bbf3c-db3c-11ed-afa1-0242ac120001',
              name: '4 Tablespoon Olive oil for frying',
              media: {},
              allergens: {
                allergen: []
              }
            },
            {
              label: 'White wine vinegar for poaching',
              title: 'White wine vinegar for poaching',
              uid: '934bbf3c-db3c-11ed-afa1-0242ac120002',
              name: 'White wine vinegar for poaching',
              media: {},
              allergens: {
                allergen: []
              }
            },
          ],
          uid: '1',
          mealie_id: '',
          mealie_uid: '',
          url: '',
          title: '',
          rating: {
            average: 0,
            count: 0
          },
          media: {},
          description: '',
          prep_times: { for_2: 0 },
          cuisine: {
            slug: '',
            title: ''
          },
          seo: {
            title: '',
            description: '',
            canonical: '',
            open_graph_image: ''
          },
          _version: 1,
          nutritional_information: {
            per_hundred_grams: {
              energy_kcal: 6,
              energy_kj: 0,
              fat_mg: 0,
              fat_saturates_mg: 0,
              carbs_mg: 0,
              carbs_sugars_mg: 0,
              fibre_mg: 0,
              protein_mg: 0,
              salt_mg: 0,
              net_weight_mg: 0
            },
            per_portion: {
              energy_kcal: 0,
              energy_kj: 0,
              fat_mg: 0,
              fat_saturates_mg: 0,
              carbs_mg: 0,
              carbs_sugars_mg: 0,
              fibre_mg: 0,
              protein_mg: 0,
              salt_mg: 0,
              net_weight_mg: 0
            }
          }
        },
        {
          ingredients: [
            {
              label: '4 Whole eggs',
              title: '4 Whole eggs',
              uid: '934bbf3c-db3c-11ed-afa1-0242ac120004',
              name: '4 Whole eggs',
              media: {},
              allergens: {
                allergen: [
                  {
                    slug: 'egg'
                  }
                ]
              }
            },
            {
              label: 'White wine vinegar for poaching',
              title: 'White wine vinegar for poaching',
              uid: '934bbf3c-db3c-11ed-afa1-0242ac120002',
              name: 'White wine vinegar for poaching',
              media: {},
              allergens: {
                allergen: []
              }
            },
          ],
          uid: '2',
          mealie_id: '',
          mealie_uid: '',
          url: '',
          title: '',
          rating: {
            average: 0,
            count: 0
          },
          media: {},
          description: '',
          prep_times: { for_2: 0 },
          cuisine: {
            slug: '',
            title: ''
          },
          seo: {
            title: '',
            description: '',
            canonical: '',
            open_graph_image: ''
          },
          _version: 1,
          nutritional_information: {
            per_hundred_grams: {
              energy_kcal: 6,
              energy_kj: 0,
              fat_mg: 0,
              fat_saturates_mg: 0,
              carbs_mg: 0,
              carbs_sugars_mg: 0,
              fibre_mg: 0,
              protein_mg: 0,
              salt_mg: 0,
              net_weight_mg: 0
            },
            per_portion: {
              energy_kcal: 0,
              energy_kj: 0,
              fat_mg: 0,
              fat_saturates_mg: 0,
              carbs_mg: 0,
              carbs_sugars_mg: 0,
              fibre_mg: 0,
              protein_mg: 0,
              salt_mg: 0,
              net_weight_mg: 0
            }
          }
        }
      ]
      const recipePortions: Record<string, IRecipePortionCount> = {}
      recipePortions[recipes[0].uid] = { recipe: recipes[0], servings: 2 }
      recipePortions[recipes[1].uid] = { recipe: recipes[1], servings: 3 }

      // When
      const ingredientCounts = tallyIngredientsForRecipePortions(recipePortions)

      // Then
      expect(ingredientCounts['934bbf3c-db3c-11ed-afa1-0242ac120001']).to.equal(2)
      expect(ingredientCounts['934bbf3c-db3c-11ed-afa1-0242ac120002']).to.equal(5)
      expect(ingredientCounts['934bbf3c-db3c-11ed-afa1-0242ac120004']).to.equal(3)
    })
  })
})
