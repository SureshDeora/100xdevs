// Arrays in TS 
// if you want to access arrays in typescript, it's as simple as
// adding a [] annotation next to the type.
// Example
function maxValue(arr: number[]) {
    let max = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i]>max) max = arr[i];

    }
    return max;
}
console.log(maxValue([4,5,1,6,7,2]));

// We can define array of types but interface's can't be
type NumberArr = number[];