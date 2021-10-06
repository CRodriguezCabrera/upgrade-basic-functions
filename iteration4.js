/* Iteración #4: Calcular el promedio

Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función: */

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(array){
    let result = 0
    for (let index = 0; index < array.length; index++) {
        result += array[index]
               
    }
    let finalResult = (result / array.length);
    console.log(finalResult);

}
average(numbers)

