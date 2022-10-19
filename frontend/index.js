;`use strict`

const myDate = new Date(Date.now())
console.log(myDate.toISOString().split('.')[0])

const cars = [
  {
    type: 'BMW',
    isClean: true,
    fuelLevel: 100,
  },
  {
    type: 'BMW',
    isClean: true,
    fuelLevel: 10,
  },
  {
    type: 'Mercedes',
    isClean: true,
    fuelLevel: 20,
  },
  {
    type: 'BMW',
    isClean: false,
    fuelLevel: 120,
  },
  {
    type: 'Suzuki',
    isClean: true,
    fuelLevel: 30,
  },
  {
    type: 'Mercedes',
    isClean: false,
    fuelLevel: 80,
  },
]

const sumFuelLevel = cars.reduce((sum, car) => (sum += car.fuelLevel), 0)
console.log(`${sumFuelLevel} Litres`)

const findFirstCleanAndMaxFuelLevelCar = cars
  .filter((car) => car.isClean)
  .reduce((prevCar, car) => (prevCar.fuelLevel >= car.fuelLevel ? prevCar : car))
console.log(findFirstCleanAndMaxFuelLevelCar)

const findLowestFuelLevelMercedes = cars
  .filter((car) => car.type === 'Mercedes')
  .reduce((prevCar, car) => (prevCar.fuelLevel < car.fuelLevel ? prevCar : car))
console.log(findLowestFuelLevelMercedes)

const deepData = []

function* addNumbers(num) {
  let counter = 0
  while (true) {
    yield (counter += num)
  }
}

let generate = addNumbers(10)

console.log(generate.next().value)
console.log(generate.next().value)
console.log(generate.next().value)
console.log(generate.next().value)
