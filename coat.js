// Programme qui va m'aider à décider si je dois mettre mon manteau
// ou pas en fonction d'une méteo pluvieuse ou venteuse
let isRainy = false
let isWindy = false
let temperature = 8

if ((isRainy || isWindy) || temperature <= 12) {
  console.log('Mettez votre manteau')
} else {
  console.log('Nous n avez pas besoin de manteau today')
}