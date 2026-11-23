/*const adress1 = {
    street: "Av. Brasil",
    number: 20,
}

//Essa coonst adress2 em baixo cria apenas uma cópia de adress1, ela é apenas uma referência de adress1 então se eu não crio um novo objeto a alteração que for feita no adress2 também mudará o adress1
//const adress2 = adress1

// Criando um novo objeto utilizando as propriedades de adress1(opção1)
//const adress2 = { ...adress1}
//adress2.number = 30

const adress2 = { ...adress1, number: 30}
console.log(adress1, adress2)

//Exemplo array

const list1 = ["Apples", "Banana"]

//const list2 = list1


const list2 = [ ...list1]
list2.push("Melon")
console.log(list1, list2)
*/
/*

O Object.freeze impede que objetos superficiais sejam modificados, mas não impede que objetos aninhados sejam modificados. Conforme o exemplo a seguir
const book = {
    title: "Objetos imutáveis",
    category: "javaScript",
    author: {
        name: "Lucas",
        age: 18,
    }
}

console.log(book)

//book.category = "HTML"
//console.log(book)

Object.freeze(book)

book.category = "CSS" // impediu a modificação

console.log(book)

book.author.age = 20 // Não impediu a modificação
console.log(book)
*/
/*
const book = {
    title: "Objetos imutáveis",
    category: "javaScript",
    author: {
        name: "Lucas",
        age: 18,
    }
}

function deepFreeze(object) {
    // Obtém um array com todas as propriedades do objeto.
    const props = Reflect.ownKeys(object)
    
    // Intera sobre todas as propriedados do objeto

    for (const prop of props) {

        // Obtém o valor associado à propriedade atual
        const value = object[prop]
        

        // verifica se o valor é um objeto ou uma função para continuar aplicando o deepFreeze em objetos aninhados.
        if (value && typeof value === "object" || typeof value === "function") {
            deepFreeze(value)
        }
    }

    // Retorna o objeto congelado.

    return Object.freeze(object)
}

deepFreeze(book)

book.category = "HTML"
book.age = 25

console.log(book)
*/

const book = {
    title: "Objetos imutáveis",
    category: "javaScript",
    author: {
        name: "Lucas",
        age: 18,
    }
}

const updatedBook = {
    ...book,
    title: "Engenharia de integrações",
    category: "Engineer",
    type: "Senior"
}
console.log(book)
console.log(updatedBook)

// utilizando operador de desestruturação (rest operator) para remover propriedades.

const { category, ...bookWithoutCategory} = book

console.log(bookWithoutCategory)