const adress1 = {
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