/*
1. Template Literals
 - Introduced in ES6.
 - Can embed expressions inside a string using ${} syntax.
 - Make code more radable and easy to maintain.

*/

console.log("Concat using template literals");

{
    let fName = "Swapnil";
    let lName = "Bhosale";
    let fullName = `Full Name: ${fName} ${lName}`;
    console.log(fullName);
}


//2.  Using + operator
console.log("Concat using + operator");

{
    let fName = "Swapnil";
    let lName = "Bhosale";
    let fullName = "Full Name: " + fName + " " +lName;
    console.log(fullName);
}


// 3. Using concat() method
// - concat() method is the built in JS function that combines multiple string into one.
console.log("Concat using concat() method");
{
    let fName = "Swapnil";
    let lName = "Bhosale";
    let fullName = "Full Name: ".concat(fName.concat(" ".concat(lName)));
    console.log(fullName);
}
