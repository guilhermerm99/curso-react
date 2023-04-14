// 6 - Destructuring

const fruits = ['banana', 'apple', 'orange'];

const [first, second, third] = fruits;

console.log(first);
console.log(second);
console.log(third);

const productDetails = {
    name: 'Smartphone',
    price: 1234.56,
    category: 'Eletrônicos',
    color: 'black'
}

const {name, price, category, color} = productDetails;

console.log(`O nome do produto é ${name}, custa ${price} reais, pertence a categoria ${category} e é da cor ${color}.`);