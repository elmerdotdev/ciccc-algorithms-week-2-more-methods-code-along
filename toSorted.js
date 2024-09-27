// toSorted - Creates a new array and sorts it
const unsorted = [3, 5, 1, 2, 7]
const sorted = unsorted.toSorted((a, b) => a - b) // sorts the array and stores into var
console.log(unsorted)
console.log(sorted)


// Previous way of sorting
const sortedNums = [...unsorted].sort() // creates a shallow copy and sorts
console.log(sortedNums)