//iteration 3

const numbers = [1, 2, 3, 5, 45, 37, 58];
function sumAll(array){
    let result = array[0]
    for (let index = 0; index < array.length; index++) {
        result += array[index]
    }
    console.log(result)
}

sumAll(numbers)