// 2 - Arrow Functions

const sum = function sum(a, b) {
  return a + b;
}

const arrowSum = (a, b) =>  a + b

console.log(sum(5, 5))
console.log(arrowSum(5, 5))

const greeting = (name) =>  {
    if (name){
        return `Hello ${name}!`
    }   else {
        return 'Hello!'
    }
}

console.log(greeting("Guilherme"))
console.log(greeting())

const testArrow = () =>  console.log('Testou!')

testArrow()

const user = {
    name: 'Guilherme',
    sayUserName() {
        var self = this
        setTimeout(function() {
        console.log(self)
        console.log("Username: " + self.name)
        }, 500)
    },
    sayUserNameArrow() {
        setTimeout(() =>  {
            console.log(this)
            console.log("Username: " + this.name)
        }, 700)
    },
}

user.sayUserName()
user.sayUserNameArrow()
