{
    /*
        1. if Statement 
         - Syntax :
           if(condition) {
                // block of code runs if the condition is true
           }
    */

    let x = 24;

    if(x % 2 === 0){
        console.log(`${x} is Even number`);
    }

    if(x % 2 !== 0){
        console.log(`${x} is Odd number`);
    }


    /*
        2.if-else Statement
         - Syntax :
           if(condition){
                block of code runs if the condition is true
            }
           else{
                block of code runs if the condition is false
            }
    */

    if(x % 2 === 0){
        console.log(`${x} is Even number`);
    }
    else{
        console.log(`${x} is Odd number`);
    }


    /*
        3.if-else if-else statement 
         - Syntax : 
           if(condition1){
                block of code exicutes if the condition1 is true
            }
            else if(condition2){
                block of code exicutes if the condition1 is false and condition2 is true
            }
            ...         // there can be many else if blocks in between 
            else{
                block of code runs if any of the above conditions are not satisfied
            }
    */

    const y = -44;
    if(y > 0){
        console.log(`${y} is positive number`);
    }
    else if( y < 0){
        console.log(`${y} is negative number`);
    }
    else{
        console.log(`${y} is zero`);
    }

}


{
    /*
        4.Switch Statement 
         - Syntax : 
           switch(value){
                case value1: 
                    block of code
                    break;
                case value2:
                    block of code
                    break;
                ...
                case valueN:
                    block of code 
                    break;
                dedfault:
                    block of code
                    break;
           }
    */

    switch("English"){
        case "Japanese":
            console.log("Japanese Language");
            break;
        case "Hindi":
            console.log("Hindi Language");
            break;
        case "Marathi":
            console.log("Marathi Language");
            break;
        case "English":
            console.log("English Language");
            break;
        case "German":
            console.log("German Language");
            break;
        default:
            console.log("All Languages");
            break;
    }
}


{
    /*
        5.Ternary Operator (?:)
         - Syntax: 
           condition ? expression if condition is true : expression if condition is false ; 
    */

    (20 % 2 == 0)? console.log("Even") : console.log("Odd");
}