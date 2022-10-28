'use strict'

const data = [
  { gender: 'f', name: 'maria', age: 20 },
  { gender: 'm', name: 'andras', age: 35 },
  { gender: 'm', name: 'john', age: 56 },
  { gender: 'f', name: 'zoe', age: 10 },
  { gender: 'm', name: 'vincent', age: 65 },
]

const sumAge = data.reduce((acc, { age }) => (acc += age), 0)
console.log(sumAge)

const concatAllNames = data.reduce((acc, { name }) => (acc += name), '')
console.log(concatAllNames)

const sumFamale = data.reduce((acc, { gender }) => (acc += gender === 'm' ? 1 : 0), 0)
console.log(sumFamale)

const groupedByGender = data.reduce((groupedPerson, { gender, name, age }) => {
  // if (!groupedPerson[gender]) groupedPerson[gender] = []
  // groupedPerson[gender] = groupedPerson[gender] ? groupedPerson[gender] : []
  groupedPerson[gender] = groupedPerson[gender] || []
  groupedPerson[gender].push(data)
  return groupedPerson
}, {})
console.log(groupedByGender)

const customGroupBy = (groupTo) => {
  return data.reduce((acc, item) => {
    const key = item[groupTo]
    const group = acc[key] || []
    return { ...acc, [key]: [...group, item] }
  }, {})
}
console.log(customGroupBy('gender'))

const customGroupBy_II = (groupTo) => {
  return data.reduce((acc, item) => {
    const key = item[groupTo]
    console.log(key)
    const group = acc[key] || []
    return { ...acc, [key]: [...group, item] }
  }, {})
}
console.log(customGroupBy_II('gender'))

const initAge = data[0].age
const max = data.reduce((prevAge, { age }, index, dat) => (prevAge < age ? age : prevAge), initAge)
console.log(max)

const min = data.reduce((prevAge, { age }) => (prevAge > age ? age : prevAge), initAge)
console.log(min)

//SET
const repetingDATA = ['a', 'a', 'j', 'a', 'a', 'b', 'c', 'b', 'e']
const mySet = repetingDATA.reduce((acc, val) => (!acc.includes(val) ? [...acc, val] : acc), [])
console.log(mySet)
