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

// 9 - Herança
class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log("As cores são: ")
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes("Chapéu", 29.99, [
    'Preto', 
    'Azul',
    'Verde'
])

console.log(hat.name)

console.log(hat.productWithDiscount(30))

console.log(hat.showColors())

