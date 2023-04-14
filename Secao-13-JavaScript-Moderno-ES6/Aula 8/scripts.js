// 8 - Classe

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    productWithDiscount(discount) {
       return this.price * ((100 - discount)/100)
    }
}

const shirt = new Product('Camiseta gola polo', 50)

console.log(shirt.name)

console.log(shirt.productWithDiscount(10))
console.log(shirt.productWithDiscount(50))

const tenis = new Product('Tênis Nike', 200)

console.log(tenis.name)

console.log(tenis.productWithDiscount(10))

