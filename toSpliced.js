// toSpliced - Creates a shallow copy and modifies that copy by removing or adding elements
const fruits = ["apple", "banana", "orange", "melon"]
const updatedFruits = fruits.toSpliced(2, 0, "grapes")
console.log('ORIGINAL:', fruits)
console.log('UPDATED:', updatedFruits)