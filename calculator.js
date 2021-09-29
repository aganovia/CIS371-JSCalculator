/*
A running calculator program in JavaScript.

@author Amela Aganovic
@version Fall 2021
*/

/** readline module user input */
const readline = require('readline');

/** readline interface for user input */
const rl = readline.createInterface( process.stdin, process.stdout );

/** running total */
let total = 0.0;

console.log("Welcome to calculator.js!\nby Amela Aganovic")

/*
A function that takes an operator (+, -, *, /, or q to
quit) from the user.
The current running total is displayed.
*/
function getOp() {
    console.log(`\nCurrent total: ${total}`);
    rl.question("\nEnter operation (+-*/, q to quit): ",
        (op) => {getValue(op);}
    );
}

/*
A function that retrieves a numeric value from the user.
If the operator is invalid, the user is prompted to enter
the operator again.
If the operator is q, the program is terminated.

@param op   the user-specified operator (+, -, *, or /)
*/
function getValue(op) {
    
    if (op == '+' || op == '-' || op == '*' || op == '/') {
        rl.question("Enter value: ", 
            (value) => { calculate(op, value) ;}
        );
        
    } else {
        if (op == 'q') {
            quit();
        } else {
            console.log("\nERROR: Invalid op. Please try again.");
            getOp();
        }
    }  
}

/*
A function that performs the user-specified operation to
the current running total and the user-entered value.
If the value is not numeric, the user is prompted to
enter an operator again.

@param op   the user-specified operator (+, -, *, or /)
@param value    the user-entered numeric value
*/
function calculate(op, value) {

    if (isNaN(value)) {
        console.log("\nERROR: Not a number. Please try again.")
        getOp();
    } else {

        if (op == '+') {
            total += Number(value);
        } else if (op == '-') {
            total -= Number(value);
        } else if (op == '*') {
            total *= Number(value);
        } else if (op == '/') {
            if (value == 0) {
                console.log("\nERROR: Divide by 0. Please try again.");
            } else {
                total /= Number(value);
            }
        } else {
            console.log("\nERROR: Calculation unsuccessful. Please try again.");
        }

        getOp();
    }
}

/*
A function that displays the final running total and
ends the program.
*/
function quit() {
    console.log(`\nFinal value: ${total}`)
    rl.close();
}

getOp();