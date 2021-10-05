//iteration 2


const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(cualquierArray){
    let longestAvenger = cualquierArray[0]
    for (let index = 0; index < cualquierArray.length; index++) {
        
        if(cualquierArray[index].length > longestAvenger.length){
             longestAvenger = avengers[index]
            
        }
    }
    console.log(longestAvenger)
}
findLongestWord(avengers)