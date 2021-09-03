const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppendXL = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsertXL = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsertXL.preciseWords);
console.log("append", resultsAppendXL.preciseWords);


// LARGE ARRAY
perf.start();
doublerAppend(largeArray);
let resultsAppendL = perf.stop();


perf.start();
doublerInsert(largeArray);
let resultsInsertL = perf.stop();


console.log('Results for the largeArray');
console.log("insert", resultsInsertL.preciseWords);
console.log("append", resultsAppendL.preciseWords);


// MEDIUM ARRAY
perf.start();
doublerAppend(mediumArray);
let resultsAppendM = perf.stop();


perf.start();
doublerInsert(mediumArray);
let resultsInsertM = perf.stop();


console.log('Results for the mediumArray');
console.log("insert", resultsInsertM.preciseWords);
console.log("append", resultsAppendM.preciseWords);


// SMALL ARRAY
perf.start();
doublerAppend(smallArray);
let resultsAppendS = perf.stop();


perf.start();
doublerInsert(smallArray);
let resultsInsertS = perf.stop();


console.log('Results for the smallArray');
console.log("insert", resultsInsertS.preciseWords);
console.log("append", resultsAppendS.preciseWords);


// TINY ARRAY
perf.start();
doublerAppend(tinyArray);
let resultsAppendXS = perf.stop();


perf.start();
doublerInsert(tinyArray);
let resultsInsertXS = perf.stop();


console.log('Results for the tinyArray');
console.log("insert", resultsInsertXS.preciseWords);
console.log("append", resultsAppendXS.preciseWords);