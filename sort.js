// sort - Sorts elements inside an array (modifies the original array)
const numbers = [4, 2, 50, 5, 8, 22, 1]
numbers.sort((a, b) => {
  return a - b // sort in asc order
  // if result is positive number, do a swap
  // if result is negative number or zero, no swap
})
numbers.sort((a, b) => {
  return b - a // sort in desc order
})
console.log(numbers)


const fruits = ["Banana", "orange", "apple", "Grapes"]
fruits.sort((a, b) => {
  return a.toLowerCase().localeCompare(b.toLocaleLowerCase())
  // sort in asc alphabetical order
})
fruits.sort((a, b) => {
  return b.toLowerCase().localeCompare(a.toLocaleLowerCase())
  // sort in desc alphabetical order
})
console.log(fruits)