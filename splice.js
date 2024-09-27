// splice - Removes or adds elements from an array
const fruits = ["apple", "banana", "orange", "mango"]
fruits.splice(1, 2)
console.log(fruits) // ["apple", "mango"]
fruits.splice(1, 0, "melon", "pineapple")
console.log(fruits) // ["apple", "melon", "pineapple", "mango"]
