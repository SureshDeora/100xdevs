    // Generics are a "language independent" concept (exist in C++ and java as well
     {/*1. Problem Statement
        Let's say uou have a funtion that needs to return the first element of an array.
         Array ca be of type either string or integer.
         How would you solvee this problem?
          */}
    
   // Very first approach       
    type Input = string | number;      
    function firstEl(arr: Input[]) { // arr: (string | number)[]
        return arr[0];
    }   

    const value1 = firstEl(["suresh", "doera", "saini"]);
    console.log(value1); // we got our string as output
// The problem in this approach is if we want to perform any opration on output we got
// we can't do that like this
// console.log(value1.toUpperCase()) // because it is a type of Input, we can't perform 
//any opration on perticular result directly
// Here Generics comes in picture

function firstEl1<T>(arr: T[]): T {
return arr[0];
}
const val = firstEl1<string>(["suresh", "deora", "saini"]); // here the type of vall is string and we can perform any operation of string has. while calling func it's not neccessary to define type <whatever>
const val2 = firstEl1<number>([1, 2, 3]); //same for number it won't complain if we perform any operation of number has.
console.log(val.toUpperCase());