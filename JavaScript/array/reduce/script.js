/* O método recude() é utilizado para reduzir um array a um único valor.

Parâmetros:
    - Array original (values)
    - Acumulador (accumulator)
    - Valor da interação (currentValue)
    - Valor inicial (0)
    - Index (index da interação atual - opcional)   
*/

const value = [1, 2,  3, 4 ,5]

const sum = values.reduce((accumulator, currentValue, index) => {
    console.log("ACUMULADOR: ", accumulator)
    console.log("CURRENT VALUE: ", currentValue)
    console.log("INDEX:", index)

    console.log("SOMA: ", accumulator + currentValue)
    console.log("###########")

    return accumulator + currentValue
}, /*Valor inicial*/ 0)