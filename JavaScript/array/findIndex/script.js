// O método findIndex() retorna o índice no array do primerio elemento que satisfazer a condição. Caso contrário, retorn -1, indicando que nenhum elemento passou no test.

const values = [4, 4, 8, 10, 29, 3]

const index = values.findIndex((value) => value > 4)
console.log(index)
console.log(values[index])

