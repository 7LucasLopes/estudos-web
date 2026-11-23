// O método filter() cria um novo array com todos os elementos que passaram na condição

const words = ["JavaScript", "Java", "Python", "V360", "HTML", "CSS"]

const results = words.filter((word) => word.length > 4)

console.log(results)

const products = [
    {description: "Teclado", price: 150, promotion: true},
    {description: "Monitor", price: 1250, promotion: false},
    {description: "mouse", price: 80, promotion: true},
    {description: "Mesa", price: 450, promotion: false},
]


// Exemplo de um filtro de produtos na promoção
const promotion = products.filter((product) => product.promotion === false)
console.log(promotion)