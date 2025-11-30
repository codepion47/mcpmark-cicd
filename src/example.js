// This file demonstrates proper linting compliance after fixing violations

const exampleVariable = 'This variable is now used';
console.log(exampleVariable);

function goodFunction() {
  console.log('Single quotes instead of double quotes');
  
  let x = 5;  // Added semicolon
  
  if (x === 5) {  // Using === instead of ==
    return true;
  }
}

// Using const instead of var
const newVar = 'Using const instead of var';

goodFunction();