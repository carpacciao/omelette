import { tell } from "./utils.js"

export default class Person {
  constructor (name, money) {
    this.name = name
    this.money = money
    this.bag = []
    this.place = null
  }


  
  move (place) {
    // on est déjà dans un endroit donc on le quitte 
    if (this.place) { this.place.people = this.place.people.filter(p => p !== this) }


    this.place = place
    place.people.push(this)
    tell(`${this.name} s'est déplacé vers ${place.name}, voici les gens présent`, [...place.people])
  }

  buy (ingredients) {
    let total = ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0)
    ingredients.map(ingredient => {
      this.pay(ingredient)
      this.bag.push(_.cloneDeep(ingredient)) // copie de l'ingredient
    })
    tell(`${this.name} vient d'acheter ses ingredients pour un total de ${total}€, il lui reste ${this.money}€ et voici son sac`, this.bag)
  }

  pay (ingredient) {
    this.place.bePaidBy(this, ingredient.price)
    tell(`${this.name} vient d'acheter ${ingredient.name} pour ${ingredient.price}€`)
  }
  
  fill (bowl) {
    tell(`${this.name} est entrain de remplir le bol`)
    this.bag.map(ingredient => bowl.put(ingredient))
  }
  
  process (bowl, tool) {
    tell(`${this.name} s'occupe des éléments du bol avec ${tool.name}`, bowl)
    bowl.process(tool)
  }

  mix (bowl, name) {
    tell(`${this.name} mélange le bol pour créer ${name}`)
    bowl.mix(name)
  }


  
}