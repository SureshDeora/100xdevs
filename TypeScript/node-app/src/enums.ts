// Enums 
// Enums( short for enumerations) in TypeScript arre a feature that allows you to define a set of named constants.
// The concept behind an enumeration is to create a human-readable way to represent a set of constant value, which might otherwise
//be represented as numbers or strings.


// Example - Game
// Let's say you have a game where you have to perform an action based on weather the user has pressed the 
// "up" arrow key, "down" arrow key, "left" arrow key or "right" arrow key

//1st way to achieve this
function doSomething(keyPressed: string) {
    // do something .
    if (keyPressed == "up") {

    }
    // four if checks for all of them: up down left right
}
doSomething("up");
doSomething("down");
doSomething("left");
doSomething("right");
// The problem is here that if i call the funcion except the required arguments
// it won't complain for i.e-
doSomething("random");
// we want to restrict or check while compile time and throw error for this


// There is one way to do or enforce this without using enums using types
type keyInput = "up" | "down" | "left" | "right"; // these are the constants
function doSomething1(keyPressed: keyInput) {

}
// Now if i call this function except the arguments, it'll check in compile time and throw error
doSomething1("up");
doSomething1("down");
doSomething1("left");
doSomething1("right");
//if i call the funcion except the required arguments
// it's complaining for this 
// doSomething1("random");

{/* Enums */}
// Now to achieve same scenario but with better human readablity by using set named constant (Enums)
// Syntax very similar to interfaces
enum Direction {
    Up, //0
    Down, //1
    Left, //2
    Right //3
}
function doSomething2(keyPressed: Direction) {
    if (keyPressed == Direction.Up) // it give nice suggetion to choose from
    {}
}
doSomething2(Direction.Up);
doSomething2(Direction.Down);
doSomething2(Direction.Left);
doSomething2(Direction.Right);
// This looks more cleaner and slight more readble 
console.log(Direction.Up);//0
console.log(Direction.Down);//1
console.log(Direction.Left);//2
console.log(Direction.Right);//3

// Syntax Variation
// enum Direction {
//     Up = "up", 
//     Down = "down", 
//     Left = "left", 
//     Right = "right" 
// }
console.log(Direction.Up);// up
console.log(Direction.Down);// down
console.log(Direction.Left);// left
console.log(Direction.Right);// right