// 4 - Map

const products = [
    {name: 'Mouse Sem Fio', price: 30, category: 'Periféricos'},
    {name: 'Pen Drive', price: 25, category: 'Armazenamento'},
    {name: 'Cartucho de Tinta', price: 50, category: 'Impressão'},
    {name: 'Suporte Ergonômico para Notebook', price: 23, category: 'Periféricos'},
    {name: 'Repetidor de Sinal Wi-Fi', price: 44, category: 'Rede'},
]
    
products.map((product) => {
    if(product.category === 'Periféricos') {
        product.onSale = true
    }
})

console.log(products)