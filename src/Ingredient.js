import { tell } from "./utils.js"

export default class Ingredient {
  constructor (name, price, states = ['ready']) {
    this.name = name
    this.price = price

    this.states = states
    this.state = this.states[0]
  }

  beProcessed () {
    this.states.map(s => tell(`${this.name} passe en "${s}"`))
    this.state = this.states[this.states.length-1]
  }
}