// O método some() testa se ao menos um dos elementos no array passa na condição e retorna um valor true ou false.

const ages = [19, 20, 39]

const result = ages.some((age) => age <= 18)
console.log(result)