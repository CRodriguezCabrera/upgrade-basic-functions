/* **Iteración #5: Calcular promedio de strings**

Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y 
de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función: */

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(array){
    let valorNumber = 0;
    
    for (let index = 0; index < array.length; index++) {
        if(typeof array[index] === "string"){
            valorNumber +=array[index].length
        }
        else{
            valorNumber +=array[index]
        }
    }
    return console.log(valorNumber)
}
averageWord(mixedElements)