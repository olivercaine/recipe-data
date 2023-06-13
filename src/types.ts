/* eslint-disable max-len, camelcase */

export interface IPrepTimes {
  for_2: number
}

export interface IBasicsEntityOrAllergensEntityOrCuisine {
  slug: string
  title: string
}

export interface IAllergenEntity {
  slug: string
}

export interface IAllergens {
  allergen?: (IAllergenEntity | null)[] | null
}

export interface IImagesEntity {
  image: string
  width: number
}

export interface IMedia {
  images?: (IImagesEntity | null)[] | null
}

export interface ICookingInstructionsEntity {
  instruction: string
  order: number
  media: IMedia
}

export interface IIngredientsEntity {
  label: string // label is what is displayed in the UI
  title: string
  uid: string
  name: string
  media: IMedia
  allergens: IAllergens
}

export interface ISeo {
  title: string
  description: string
  robots?: (null)[] | null
  canonical: string
  open_graph_image: string
}

export interface IPerHundredGramsOrPerPortion {
  energy_kcal: number
  energy_kj: number
  fat_mg: number
  fat_saturates_mg: number
  carbs_mg: number
  carbs_sugars_mg: number
  fibre_mg: number
  protein_mg: number
  salt_mg: number
  net_weight_mg: number
}

export interface INutritionalInformation {
  per_hundred_grams: IPerHundredGramsOrPerPortion
  per_portion: IPerHundredGramsOrPerPortion
}

export interface IRating {
  average: number
  count: number
}

export interface ICategoriesEntity {
  title: string
  url: string
  uid: string
}

export interface IRecipe {
  uid: string
  mealie_id: string
  mealie_uid: string
  url: string
  title: string
  categories?: (ICategoriesEntity)[] | null
  media: IMedia
  rating: IRating
  description: string
  prep_times: IPrepTimes
  cuisine: IBasicsEntityOrAllergensEntityOrCuisine
  ingredients?: (IIngredientsEntity)[] | null
  basics?: (IBasicsEntityOrAllergensEntityOrCuisine)[] | null
  cooking_instructions?: (ICookingInstructionsEntity)[] | null
  allergens?: (IBasicsEntityOrAllergensEntityOrCuisine)[] | null
  seo: ISeo
  tags?: (null)[] | null
  _version: number
  nutritional_information: INutritionalInformation
}
