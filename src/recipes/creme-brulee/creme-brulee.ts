/* eslint-disable max-len */
import { IRecipe } from '../../types'

export const recipeCremeBrulee: IRecipe = {
  url: '/creme-brulee',
  title: 'Creme Brulee',
  categories: [
    {
      title: 'Dessert',
      url: '/dessert',
      uid: '12346'
    }
  ],
  uid: '43473cb2-db34-11ed-afa1-000000000002',
  mealie_id: '2',
  mealie_uid: 'a410236e-db35-11ed-afa1-000000000002',
  media: {
    images: [
      {
        image: 'https://raw.githubusercontent.com/olivercaine/recipe-data/main/src/recipes/creme-brulee/DALL-E-2023-05-07-22.26.22-creme-brulee.png',
        width: 1024
      }
    ]
  },
  rating: {
    average: 4.5,
    count: 871
  },
  description: 'Crème Brûlée is a classic French dessert that consists of a rich custard base topped with a layer of caramelized sugar.',
  prep_times: {
    for_2: 60,
  },
  cuisine: {
    slug: 'french',
    title: 'French'
  },
  ingredients: [
    {
      label: '1 quart heavy cream',
      title: '1 quart heavy cream',
      uid: '934bbf3c-db3c-11ed-afa1-100000000001',
      name: '1 quart heavy cream',
      media: {
        images: [
          {
            image: 'https://raw.githubusercontent.com/olivercaine/recipe-data/main/src/ingredients/DALL-E-2023-05-07-22.52.21-heavy-cream-with-a-white-background.png',
            width: 1500
          }
        ]
      },
      allergens: {
        allergen: []
      }
    },
    {
      label: '1 vanilla bean, split lengthwise and scraped',
      title: '1 vanilla bean, split lengthwise and scraped',
      uid: '934bbf3c-db3c-11ed-afa1-100000000002',
      name: '1 vanilla bean, split lengthwise and scraped',
      media: {
        images: [
          {
            image: 'https://raw.githubusercontent.com/olivercaine/recipe-data/main/src/ingredients/DALL-E-2023-05-07-22.52.18-vanilla-bean-with-a-white-background.png',
            width: 1500
          }
        ]
      },
      allergens: {
        allergen: []
      }
    },
    {
      label: '6 egg yolks',
      title: '6 egg yolks',
      uid: '934bbf3c-db3c-11ed-afa1-100000000003',
      name: '6 egg yolks',
      media: {
        images: [
          {
            image: 'https://raw.githubusercontent.com/olivercaine/recipe-data/main/src/ingredients/dalle-2023-04-15-150443-egg-with-a-white-background.png',
            width: 1500
          }
        ]
      },
      allergens: {
        allergen: []
      }
    },
    {
      label: '3/4 cup granulated sugar, divided',
      title: '3/4 cup granulated sugar, divided',
      uid: '934bbf3c-db3c-11ed-afa1-100000000004',
      name: '3/4 cup granulated sugar, divided',
      media: {
        images: [
          {
            image: 'https://raw.githubusercontent.com/olivercaine/recipe-data/main/src/ingredients/DALL-E-2023-05-07-22.52.24-a-pile-of-sugar-with-a-white-background.png',
            width: 1500
          }
        ]
      },
      allergens: {
        allergen: []
      }
    },
    {
      label: '1/4 teaspoon salt',
      title: '1/4 teaspoon salt',
      uid: '934bbf3c-db3c-11ed-afa1-100000000005',
      name: '1/4 teaspoon salt',
      media: {
        images: [
          {
            image: 'https://raw.githubusercontent.com/olivercaine/recipe-data/main/src/ingredients/DALL-E-2023-05-07-22.52.26-a-pile-of-salt-with-a-white%20background.png',
            width: 1500
          }
        ]
      },
      allergens: {
        allergen: []
      }
    },
  ],
  basics: [
    {
      title: 'Sugar',
      slug: 'sugar'
    },
    {
      title: 'Salt',
      slug: 'salt'
    }
  ],
  cooking_instructions: [
    {
      instruction: 'Preheat your oven to 300°F.',
      order: 1,
      media: {
        images: [
          {
            image:
              'https://raw.githubusercontent.com/olivercaine/recipe-data/main/src/recipes/creme-brulee/DALL-E-2023-05-07-22.35.39-a-close-up-of-woman-setting-the-dial-on-an-oven.png',
            width: 1500,
          },
        ],
      },
    },
    {
      instruction:
        'In a saucepan, heat the heavy cream over medium heat until it just starts to simmer.',
      order: 1,
      media: {
        images: [
          {
            image:
              'https://raw.githubusercontent.com/olivercaine/recipe-data/main/src/recipes/creme-brulee/DALL-E-2023-05-07-22.31.01-a-saucepan-containing-heavy-cream.png',
            width: 1500,
          },
        ],
      },
    },
    {
      instruction:
        'In a separate bowl, whisk together the granulated sugar, vanilla extract, and egg yolks until the mixture is pale and thick.',
      order: 1,
      media: {
        images: [
          {
            image:
              'https://raw.githubusercontent.com/olivercaine/recipe-data/main/src/recipes/creme-brulee/DALL-E-2023-05-07-22.34.14-a%20photo-of-a-bowl-with-egg-yolk-and-sugar-being-whisked.png',
            width: 1500,
          },
        ],
      },
    },
    {
      instruction:
        'Slowly pour the hot cream into the egg mixture while whisking constantly.',
      order: 1,
      media: {
        images: [
          {
            image:
              'https://raw.githubusercontent.com/olivercaine/recipe-data/main/src/recipes/creme-brulee/DALL-E-2023-05-07-22.56.14-whisking-eggs-in-a-bowl-with-thick-creme-being-poured-in.png',
            width: 1500,
          },
        ],
      },
    },
    {
      instruction:
        'Pour the mixture through a fine-mesh sieve to remove any lumps.',
      order: 1,
      media: {
        images: [
          {
            image:
              'https://raw.githubusercontent.com/olivercaine/recipe-data/main/src/recipes/creme-brulee/DALL-E-2023-05-07-23.04.36-a-sieve-with-a-yellow-liquid-food-mixture-being-poured-into-it.png',
            width: 1500,
          },
        ],
      },
    },
    {
      instruction: 'Divide the mixture evenly among 4-6 ramekins.',
      order: 1,
      media: {
        images: [
          {
            image:
              'https://raw.githubusercontent.com/olivercaine/recipe-data/main/src/recipes/creme-brulee/DALL-E-2023-05-07-23.06.48-4-ramekins-full-of-light-yellow-mixture.png',
            width: 1500,
          },
        ],
      },
    },
    {
      instruction:
        'Place the ramekins in a baking dish and fill the dish with hot water until it comes about halfway up the sides of the ramekins.',
      order: 1,
      media: {
        images: [
          {
            image:
              'https://raw.githubusercontent.com/olivercaine/recipe-data/main/src/recipes/creme-brulee/DALL·E-2023-05-07-23.21.15-a-baking-dish-containing-water-and-4-ramekins.png',
            width: 1500,
          },
        ],
      },
    },
    {
      instruction:
        'Bake for 35-40 minutes, or until the custards are set but still slightly jiggly in the center.',
      order: 1,
      media: {
        images: [
          {
            image:
              'https://raw.githubusercontent.com/olivercaine/recipe-data/main/src/recipes/creme-brulee/DALL-E-2023-05-07-23.22.54-a-modern-oven-with-4-ramekins-inside.png',
            width: 1500,
          },
        ],
      },
    },
    {
      instruction:
        'Remove the ramekins from the water bath and let them cool to room temperature. Then cover them with plastic wrap and refrigerate for at least 2 hours, or up to 2 days.',
      order: 1,
      media: {
        images: [
          {
            image:
              'https://raw.githubusercontent.com/olivercaine/recipe-data/main/src/recipes/creme-brulee/DALL-E-2023-05-07-23.30.01-4-creme-brulee-in-a-cooking-bowl-covered-in-cling-film.png',
            width: 1500,
          },
        ],
      },
    },
    {
      instruction:
        "When you're ready to serve, remove the custards from the fridge and let them sit at room temperature for 10-15 minutes.",
      order: 1,
      media: {
        images: [
          {
            image:
              'https://raw.githubusercontent.com/olivercaine/recipe-data/main/src/recipes/creme-brulee/DALL·E-2023-05-07-23.31.13-4-creme-brulees-on-the-kitchen-table.png',
            width: 1500,
          },
        ],
      },
    },
    {
      instruction:
        'Sprinkle about 1 tablespoon of brown sugar evenly over the top of each custard.',
      order: 1,
      media: {
        images: [
          {
            image:
              'https://raw.githubusercontent.com/olivercaine/recipe-data/main/src/recipes/creme-brulee/DALL-E-2023-05-07-23.32.17-a-hand-sprinking-sugar-on-4-creme-brulees-with-a-teaspoon.png',
            width: 1500,
          },
        ],
      },
    },
    {
      instruction:
        "Use a kitchen torch to melt and caramelize the sugar until it forms a golden-brown crust. If you do't have a torch, you can place the ramekins under a broiler for 1 - 2 minutes, watching carefully to prevent burning.",
      order: 1,
      media: {
        images: [
          {
            image:
              'https://raw.githubusercontent.com/olivercaine/recipe-data/main/src/recipes/creme-brulee/DALL-E-2023-05-07-23.33.38-kitchen-torch-heating-creme-brulees.png',
            width: 1500,
          },
        ],
      },
    },
    {
      instruction:
        'Let the caramelized sugar cool and harden for a minute or two before serving.',
      order: 1,
      media: {
        images: [
          {
            image:
              'https://raw.githubusercontent.com/olivercaine/recipe-data/main/src/recipes/creme-brulee/DALL-E-2023-05-07-22.26.22-creme-brulee.png',
            width: 1500,
          },
        ],
      },
    },
  ],
  allergens: [
    {
      title: 'egg',
      slug: 'egg'
    },
    {
      title: 'milk',
      slug: 'milk'
    },
  ],
  seo: {
    title: 'Creme Brulee',
    description: 'Crème Brûlée is a classic French dessert that consists of a rich custard base topped with a layer of caramelized sugar.',
    robots: [],
    canonical: '',
    open_graph_image: 'TODO'
  },
  tags: [],
  _version: 1,
  nutritional_information: {
    per_hundred_grams: {
      energy_kcal: 86,
      energy_kj: 374,
      fat_mg: 2944,
      fat_saturates_mg: 602,
      carbs_mg: 10882,
      carbs_sugars_mg: 2560,
      fibre_mg: 1312,
      protein_mg: 4802,
      salt_mg: 320,
      net_weight_mg: 100000
    },
    per_portion: {
      energy_kcal: 482,
      energy_kj: 2038,
      fat_mg: 16126,
      fat_saturates_mg: 3283,
      carbs_mg: 59562,
      carbs_sugars_mg: 13961,
      fibre_mg: 7197,
      protein_mg: 26302,
      salt_mg: 1771,
      net_weight_mg: 547502
    }
  }
}
