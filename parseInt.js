// parseInt / Number - Converts strings into numbers
function getTotalPrice(price) {
  const numPrice = parseInt(price).toFixed(2) // 20.90 string
  return Number(numPrice) // converts numPrice string to a integer
}

const price = getTotalPrice("20.895022") // 20.90 number
const budget = 30.00
const remaining = budget - price
console.log(`You have ${remaining.toFixed(2)} left.`)