// How to give type to a veriable
const x: number = 100;
console.log(x); 


// How to give types to arguments of a function
function greet(firstName: string, lastName: string, age: number) {
    console.log("Hello " + firstName, lastName, age);
}

greet("Suresh", "Deora", 23);


 // Assign return type to a function 
 function sum (a: number, b: number): number {
    return a + b;
 }

 const value = sum(1, 2);
 console.log(value);


//  when passing a function as argument
            // params it is taking and return type
function runAfter1s(fn: () => void) {
    setTimeout(fn, 1000);
}

runAfter1s(function() {
    console.log("Hi There!");
});