;`use strict`

const myDate = new Date(Date.now())
console.log(myDate.toISOString().split('.')[0])
