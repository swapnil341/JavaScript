//JS Comparision Operators

{
    //1. Equality Operator (==)
    // - compares the equality of two operands.
    let x = 10;
    let y = 50;
    console.log(`${x} == ${y} : ${x == y}`);        // false


    let a = 5 ;
    let b = '5';
    console.log(`${a} == ${b} : ${a == b}`);        // true
    //JS first convert the operands to same data type and then compare

    // check for special values
    console.log("NaN == NaN : " + (NaN == NaN));      // false

    console.log("NaN == 0 : " + (NaN == 0));          // false
     
    console.log("0 == false : " + (0 == false));      // true

    console.log("0 == null : " + (0 == null));        // false (null is only equal to null or undefined)

    console.log("undefined == null : " + (undefined == null)); // true
}

{
    //2. Inequality Operator (!=)
    console.log("5 != 6 : " + (5 != 6));        // true

    console.log("5 != '5' : "+( 5 != '5'));         // false
    
    // check for special values
    console.log("0 != false : " + (0 != false));         // false

    console.log("0 != null : " + (0 != null));      // true

    console.log("NaN != NaN : " + (NaN != NaN));    // true

}


{
    //3. Strict equality Operator (===)
    console.log(" 5 === 6 : " + (5 === 6));        // false

    console.log("5 === 5 : " + (5 === 5));         // true

    console.log("10 === '10' : " + (10 === '10')); // false

    console.log("'abc' === 'abc' : " + ('abc' === 'abc')); // true

    console.log("'abc' === 'xyz' : " + ('abc' === 'xyz')); // false

    // check for special values
    console.log("NaN === NaN : " + (NaN === NaN));    // false

    console.log("0 === false : " + (0 === false));      // false

    console.log("0 === null : " + (0 === null));        // false
}


{
    //4. Strict Inequality Operator (!==)
    console.log("5 !== 6 : " + (5 !== 6));        // true

    console.log("5 !== '5' : "+( 5 !== '5'));         // true
    
    // check for special values
    console.log("0 !== false : " + (0 !== false));     // true

    console.log("0 !== null : " + (0 !== null));      // true

    console.log("NaN !== NaN : " + (NaN !== NaN));    // true

}

{
    //5. Greater than Operator (>)
    console.log("5 > 6 : " + (5>6));        // fasle
    console.log("5 > 1 : " + (5 > 1));      // true
    console.log("10 > '5' : " + (10 > '5')); // true

    // check for special values
    console.log("NaN > 1 : " + (NaN > 1));    // fasle
    console.log("NaN > 0 : " + (NaN > 0));    // false
    console.log("null > 1 : " + (null > 1));  // false
    console.log("null > 0 : " + (null > 0));  // true
}


{
    //6. Greater than or equal Operator (>=)
    console.log("5 >= 6 : " + (5 >= 6));        // fasle
    console.log("5 >= 1 : " + (5 >= 1));      // true
    console.log("10 >= '5' : " + (10 >= '5')); // true

    // check for special values
    console.log("NaN >= 1 : " + (NaN >= 1));    // fasle
    console.log("NaN >= 0 : " + (NaN >= 0));    // false
    console.log("null >= 1 : " + (null >= 1));  // false
    console.log("null >= 0 : " + (null >= 0));  // true
}

{
    //7. Greater than Operator (<)
    console.log("5 < 6 : " + (5 < 6));        // true
    console.log("5 < 1 : " + (5 < 1));      // false
    console.log("10 < '5' : " + (10 < '5')); // false

    // check for special values
    console.log("NaN < 1 : " + (NaN < 1));    // fasle
    console.log("NaN < 0 : " + (NaN < 0));    // false
    console.log("null < 1 : " + (null < 1));  // true
    console.log("null < 0 : " + (null < 0));  // false
}


{
    //8. Greater than Operator (<)
    console.log("5 <= 6 : " + (5 <= 6));        // true
    console.log("5 <= 1 : " + (5 <= 1));      // false
    console.log("10 <= '5' : " + (10 <= '5')); // false

    // check for special values
    console.log("NaN <= 1 : " + (NaN <= 1));    // fasle
    console.log("NaN <= 0 : " + (NaN <= 0));    // false
    console.log("null <= 1 : " + (null <= 1));  // true
    console.log("null <= 0 : " + (null <= 0));  // false
}