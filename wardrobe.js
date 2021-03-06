let isRainy = false
let temperature = 2
let clothes = ''
let iswindy = false
let issnowy = true

if (issnowy) {
  clothes += 'puffy jacket'
}

if (iswindy) {
  clothes += 'wind-blast,'
}

if (isRainy) {
  clothes += 'umbrella, ' // concatenation de string
}

if (temperature < 15) {
  clothes += 'coat, t-shirt'
} else if (temperature >= 15 && temperature <= 20) {
  clothes += 'sweater, t-shirt '
}else if (temperature <= 0 && temperature <= 15) {
clothes += 'pull, t-shirt '

}else {
  clothes += 't-shirt, '
}
console.log(`Je vous recommande de porter: ${clothes}`)