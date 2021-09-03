// ZERO SUM
const arr1 = [1, 2, -3] // Should return true
const arr2 = [1, 2, 3] // Should return true


function sumZero(arr){
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if (arr.reduce(reducer) === 0){
        return true
    } else {
        return false
    } 
}

// Runtime should be only a handful of picoseconds for current arrays. 
console.log(sumZero(arr1))
console.log(sumZero(arr2))



// LONGEST WORD
const arr3 = ['hi', 'hello', 'bye'] // Expect 5
const arr4 = ['toast', 'cat', 'no'] // Expect 5

function longestWord(arr){
    let word = ''
    for(let i = 0; i < arr.length; i++){
        if (arr[i].length > word.length){
            word = arr[i]
        }
    }
    return word.length
}

// This function is more complex, as it has to first calculate and then compare arr[i].length AND word.length each iteration. While it runs quickly on this small scale, it may not scale up very well.
console.log(longestWord(arr3))
console.log(longestWord(arr4))