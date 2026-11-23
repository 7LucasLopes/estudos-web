// O método find() retorna o valor do primeiro elemento do array que satisfazer a condição. Caso contrário, undefined é retornado.

const values = [1, 6, 9, 78, 95, 23]

console.log(values.find((value) => value > 5))

// Exemplo com objetos

const fruits = [
    {name: "Bananas", quantity: 23},
    {name: "Apples", quantity: 25},
    {name: "oranges", quantity: 15},
]

const results = fruits.find((fruit) => fruit.name === "Apples")
console.log(results)