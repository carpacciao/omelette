export default class Place {
  constructor (name, stock = [], people = []) {
    this.name = name
    this.people = people
    this.stock = stock
    this.money = 0
  }

  bePaidBy (person, price) {
    person.money -= price
    this.money += price
  }
}