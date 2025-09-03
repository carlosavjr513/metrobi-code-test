function getMaxValue(carrotTypes, capacity) {
  const aux = new Array(capacity + 1).fill(0)

  for (let weight = 1; weight <= capacity; weight++) {
    for (const carrot of carrotTypes) {
      if (carrot.kg <= weight) {
        aux[weight] = Math.max(aux[weight], aux[weight - carrot.kg] + carrot.price)
      }
    }
  }

  return aux[capacity]
}

const carrotTypes = [{ kg: 5, price: 100 },{ kg: 7, price: 150 },{ kg: 3, price: 70 }]
const capacity = 36
console.log(getMaxValue(carrotTypes, capacity))
