/* **Iteration #8: Contador de repeticiones**

Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  
Puedes usar este array para probar tu función: */


const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(array) {
  let counter = {};
  for (let index = 0; index < array.length; index++) {
      if(array[index] in counter){
          counter[array[index]]++
      }else{
          counter[array[index]] = 1
      }
      
  }
  return console.log(counter) 
}
repeatCounter(counterWords)