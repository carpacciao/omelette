export function wait (s) {
  return new Promise(res => {
    setTimeout(res, s * 1000 /* to second */ )
  })
}

// ça agit comme un console log seulement celui crée une copie des éléments différent d'un string comme ça on a leur valeur à l'instant T
export function tell (...args) {
  let final = []
  args.map(arg => typeof arg !== 'string' ? final.push(_.cloneDeep(arg)) : final.push(arg))
  console.log(...final)
}

export default {
  wait,
  tell,
}