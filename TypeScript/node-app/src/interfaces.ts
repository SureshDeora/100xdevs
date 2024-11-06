// Interfaces

// How can you assign types to objects? for example a user object
//that looks like this
const user = { 
    firstName: "Suresh",
    lastName: "Saini",
    // email: "tempmail@gmail.com",
    age: 23,
}

// To assign a type to the user, we use interface
interface User {
    firstName: string;
    lastName: string;
    email?: string; //now email is optional argument, if provided it'll be used ohterwise won't throw any error
    age: number;
}





// How this follow Dry principle, Let's understand this using an example

// Either write like this
function isLegal(user: {
    firstName: string;
    lastName: string;
    age: number;
}) {
    if(user.age > 18) return true;
    return false;
}
function greetUser(user: {
    firstName: string;
    lastName: string;
    age: number;
}) {
    console.log(user.firstName);
}


// or When using Interfaces to avoid Do not repeat yourself princeple
interface Info {
    firstName: string;
    lastName: string;
    age: number;
}
//Now we don't have to explicitly define the structer of receiving obj as params 
function isLegal1(info: Info): boolean {
    if( info.age > 18 ) return true;
    return false;
}
function greetUser1(info: Info) {
    console.log(info.firstName);
}


isLegal1({firstName: "Suresh", 
    lastName: "Deora", 
    age: 20,});

greetUser1({firstName: "Suresh",
    lastName: "Saini",
    age: 14,
});

// Taking array of interface as parameters
function greetUser2(user: User[]) {
    console.log("......");
}


// Interfaces have another special property, You can implement interfaces as a class

// Let's say you jave an person interface-
interface Person {
    name: string,
    age: number,
    greet(phrase: string): void,
}
// You can create a class which implements this interface.
class Employee implements Person {
    name: string;
    age: number;
    constructor(n: string, a : number) {
        this.name = n;
        this.age  = a;
    }
    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}
const e = new Employee("Suresh", 23);
console.log(e.name);
// Why to use interfaces in class-
// whenever we want something  mendatory to be implemented in class
//  we can create that structer in interfaces and implements in class 
// every class which implements the interface that class must hava those properties that definded in interface.
// In the above example where Employee class implements Person interface , so then the class had to implement 
// all the properties of interface otherwise it would have thrown an error.



// Interface can extends multiple interfaces but types can't
 
interface Manager {
   
}
interface Employee {
   
}

interface Lead extends Manager, Employee {
    
}