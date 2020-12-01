//imports 
import Person from './Person.js'
import Place from './Place.js'
import Knife from './Knife.js'
import Ingredient from './Ingredient.js'
import Pan from './Pan.js'
import Bowl from './Bowl.js'

//definitions
const LUCAS = new Person('Lucas', 420)
const HOUSE = new Place('house', [])
const KNIFE = new Knife('knife')
const PRODUCTS = [
    new Ingredient('egg', 1, ['untouched', 'breaked']),
    new Ingredient('spices', 1, ['ready']),
    new Ingredient('cheese', 1, ['untouched', 'cutted']),
    new Ingredient('oinon', 1, ['untouched', 'cutted']),
]

const SHOP = new Place('shop', PRODUCTS)

const BOWL = new Bowl()

//game
async function makeMeAnOmelette () {
    LUCAS.move(HOUSE)
    LUCAS.move(SHOP)
    LUCAS.buy(PRODUCTS)
    LUCAS.move(HOUSE)
    LUCAS.fill(BOWL)
    LUCAS.process(BOWL, KNIFE)
    LUCAS.mix(BOWL, 'Omelette')

}

//launch
makeMeAnOmelette()