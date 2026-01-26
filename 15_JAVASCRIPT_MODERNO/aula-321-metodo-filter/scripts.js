// 3 - filter

const arr = [1, 2, 3, 4, 5]

console.log(arr)

// forma mais explicita
// const highNumbers = arr.filter((n) => {
//   if (n > 3) {
//     return n;
//   }
// })

//forma compacta
const highNumbers = arr.filter((n) => n > 3)

console.log(highNumbers);

const users = [
  { name: "Matheus", available: true },
  { name: "Pedro", available: false },
  { name: "João", available: true },
  { name: "Marcos", available: false }
]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers)
console.log(notAvailableUsers)

