// Types v/s Interfaces --> no = sign in syntax
// Types can not be implemented in any class likewise Interfaces do
interface UserInfo1 {
    firstName: string;
    lastName: string;
    age: number;
}

// very similar to interfaces, types let you aggregate data together.
type UserInfo = {
    firstName: string;
    lastName: string;
    age: number;
}


// But Type let do a few other things.
// 1. Union
//Let's say you want to print the id of a user, which can be a number or a string. 
//In interfaces you can't do this
type StringOrNumber = string | number;
//Here "id: (string | number)" can also be used as parameter instead
function printId(id: StringOrNumber) {
    console.log(`Id: ${id}`);
}
printId(100);
printId("102");


// 2. Intersection
// what if you want to create a type that has every property of 
// multiple types/interfaces
type Employee1 = {
    name: string;
    startDate: Date;
};

interface Manager {
    name: string;
    department: string;
};

type TeamLead = Employee1 & Manager;
 const teamLead: TeamLead = {
    name: "Suresh",
    startDate: new Date(),
    department: "Software develper",
 };