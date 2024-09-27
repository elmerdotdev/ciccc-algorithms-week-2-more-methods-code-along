const students = [
  { firstName: "John", lastName: "Smith", age: 25, salary: 10000 },
  { firstName: "Jane", lastName: "Doe", age: 18, salary: 5000 },
  { firstName: "Mary", lastName: "Watson", age: 23, salary: 20000 }
]

// forEach
let totalSalary = 0
students.forEach((student, index) => {
  console.log(`${index}: ${student.firstName} earns ${student.salary}`)
  totalSalary += student.salary
})
console.log(totalSalary)

// map
const updatedStudents = students.map(student => {
  return {
    ...student,
    birthYear: 2024 - student.age
  }
})
console.log(updatedStudents)

// filter
const adults = students.filter(student => student.age >= 21)
console.log(adults)

// reduce
const totalSalary2 = students.reduce((total, currStudent) => {
  const increase = currStudent.salary * .1 // 10%
  const projectedSalary = currStudent.salary + increase
  return total + projectedSalary
}, 0)
console.log(totalSalary2)