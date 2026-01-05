//Addition Operator (+)
// - Addes two numbers 
// - Concateneats two strings

{
    let x = 1 + 2; 
    console.log(`1 + 2 = ${x}`);     // o/p = 3

    // Number + String = Concatenation
    let k = 9 + "hello";
    console.log(`9 + "hello" = ${k}`)      // o/p = 9hello

    let y = 5 + "6";
    console.log(`5 + "6" = ${y}`)      // o/p = 56
}
//Subtraction Operator (-)
//  - Subtraction operator will give the diffrence between the two operands
//  - If the operands are number but in string format then the operands will be converted into number
//    format first and then the subtraction operation will be performed .

{
    let x = 10 - 20;
    console.log(`10 - 20 = ${x}`);      // o/p = -10

    let y = 20 - "10";
    console.log(`20 - "10" = ${y}`);    // o/p = 10

    let z = 50 - "hello";
    console.log(`50 - "hello" = ${z}`);     // o/p = NaN
}


//Multiplication Operator (*)
{
    let x = 3 * 3;
    console.log(`3 * 3 = ${x}`);        // o/p = 9

    let y = -4 * 5;
    console.log(`-4 * 5 = ${y}`);       // o/p = -20

    let z = Infinity * 6;
    console.log(`Infinity * 6 = ${z}`);     // o/p = Infinity

    let a = Infinity * Infinity ;
    console.log(`Infinity * Infinity = ${a}`);      // o/p = Infinity

    let b = 'hi' * 2 ;
    console.log(`'hi' * 2 = ${b}`) ;        // o/p = NaN

}

//Division Operator (/)
{

    let x = 5 / 2;
    console.log(`5 / 2 = ${x}`);        // o/p = 2.5
 
    let y = 1.0 / 2.0;
    console.log(`1.0 / 2.0 = ${y}`);    // o/p = 0.5

    let z = 3.0 / 0;
    console.log(`3.0 / 0 = ${z}`);      // o/p = Infinity

}

//Modulus Operator (%)
{
    let x = 9 % 5;
    console.log(`9 % 5 = ${x}`);        //o/p = 4

    let y = -12 % 5;
    console.log(`-12 % 5 = ${y}`);      // o/p = -2

    let z = 1 % -2;
    console.log(`1 % -2 = ${z}`);       // o/p = 1

    let a = 5.5 % 2 ;
    console.log(`5.5 % 2 = ${a}`);      // o/p = 1.5
}


//Exponentiation Operator (**)
//  - exponentiatin operator is right associative
//  - in JS it is not possible to write an ambiguous expression ( you cannot put an unary operator 
//     +, -, ~, !, delete, void etc. immidiately before the base number)

{
    // let x = -4 ** 2;         incorrect expression 
    let x = -(4 ** 2);
    console.log(`-(4 ** 2) = ${x}`)     // o/p = -16

    let y = 2 ** 5;
    console.log(`2 ** 5 = ${y}`);        // o/p = 32

    let z = 2 ** 2 ** 2;
    console.log(`2 ** 2 ** 2 = ${z}`);      // o/p = 16
    let a = NaN ** 2 ;
    console.log(`NaN ** 2 = ${a}`)      // o/p = Nan
}


//Increment Operator (++)

{

    let a = 1;
    console.log(`a = ${a}`);
    console.log(`a++ = ${a++}`);

    let b = 1;
    console.log(`b = ${b}`);
    console.log(`++b = ${++b}`);

}


//Decrement Operator (--)
{
    let a = 1;
    console.log(`a = ${a}`);
    console.log(`a-- = ${a--}`);

    let b = 1;
    console.log(`b = ${b}`);
    console.log(`--b = ${--b}`);
}

//Unary Negation Operator(-Operand)
// - It gives the negatin of an operand.
// - Can convert non-numbers into number

{
    let x = '3';
    let y = -x;

    console.log(`Type of x('3'):${x} ${typeof(x)}`);
    console.log(`Type of y(-x):${y} ${typeof(y)}`);

     let z = -false;
    console.log(`-false: ${z}`);

    let a = -true;
    console.log(`-true: ${a}`);

    let b = -NaN;
    console.log(`-NaN: ${b}`);

    let c = -null;
    console.log(`-null: ${c}`);
}


//Unary Plus Operator (+Operand)
// - Can convert non-number into number.
// - fastest and prefered way to convert any non-number into number

{
    let x = '3';
    let y = +x;

    console.log(`Type of x('3'):${x} ${typeof(x)}`);
    console.log(`Type of y(+x):${y} ${typeof(y)}`);

    let z = +false;
    console.log(`+false: ${z}`);

    let a = +true;
    console.log(`+true: ${a}`);

    let b = +NaN;
    console.log(`+NaN: ${b}`);

    let c = +null;
    console.log(`+null: ${c}`);
}

