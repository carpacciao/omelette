import { tell } from "./utils.js"
import Ingredient from './Ingredient.js'

export default class Bowl {
  constructor (content = []) {
    this.content = content
  }

  put (ingredient) {
    this.content.push(ingredient)
    tell(`L'ingrédient ${ingredient.name} se rajoute dans le bol`)
  }

  process (tool) {
    this.content.map(ingredient => ingredient.beProcessed(tool))
    tell(`Voice le contenu du bol`, this.content)
  }

  mix (name) {
    this.content = new Ingredient(name, 10000, ['untouched', 'baked'])
    tell(`Le mélange ${name} a été créé`, this.content)
  }
}