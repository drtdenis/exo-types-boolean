let res1 = (true && false) || (false && true) // - false
console.log(`res1 = ${res1}`)
let res2 = 10 > 11 && 11 > 10 // - false
console.log(`res2 = ${res2}`)
let res3 = (true || false) && true // - true
console.log(`res3 = ${res3}`)
let res4 = (!true && !false) || (!false && !false) // - true
console.log(`res4 = ${res4}`)
let res5 = 'Hello' === 'Hello' && 'World' == 'Word' // - false
console.log(`res5 = ${res5}`)
let res6 = (!(20 >= 20) && 7 === 7) || true // - true
console.log(`res6 = ${res6}`)
let res7 = '1' === 1 && '2' == 2 && '3' === 3 // - false
console.log(`res7 = ${res7}`)
let res8 = !res7 // - true
console.log(`res8 = ${res8}`)
let res9 = !res8 // - false
console.log(`res9 = ${res9}`)
let res10 =
  (res1 && res2) || (res3 && res4) || (res5 && res6) || (res7 && res8 && res9) // - true
console.log(`res10 = ${res10}`)