// This file contains intentional linting violations to demonstrate the CI workflow

const unusedVariable = "This variable is never used"

function badFunction() {
  console.log("Double quotes instead of single quotes")
  
  let x = 5  // Missing semicolon
  
  if (x == "5") {  // Using == instead of ===
    return true
  }
}

// More violations
var oldVar = "Using var instead of let/const"

badFunction()