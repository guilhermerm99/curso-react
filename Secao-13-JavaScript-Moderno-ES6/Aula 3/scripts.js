// 3 - Filter
const arr = [1, 2, 3, 4, 5]

const highNumbers = arr.filter((n) => {
    if(n >= 3) {
        return n
    }
})

console.log(highNumbers)

const users = [
    {name: 'Guilherme', available: true},
    {name: 'Pedro', available: false},
    {name: 'Matheus', available: false},
    {name: 'João', available: true}
]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers)
console.log(notAvailableUsers)
    