let firstInput;
let operatorSign;
let secondInput;
let valid = false;

const calculator = (firstInput, operatorSign, secondInput) => {
  let invalidOperator;
  switch (operatorSign) {
    case "+":
      return firstInput + secondInput;
    case "-":
      return firstInput - secondInput;
    case "*":
      return firstInput * secondInput;
    case "/":
      return firstInput / secondInput;
    default:
      invalidOperator = "not a valid mathematical operation";
      return invalidOperator;
  }
};
// addding do while loop and validating input OPTIONAL-TASK
do {
  firstInput = prompt("enter first number", firstInput);
  operatorSign = prompt("enter operation '+, -, *, /'");
  secondInput = prompt("enter second number", secondInput);
  if (
    firstInput == "" ||
    secondInput == "" ||
    isNaN(firstInput) ||
    isNaN(secondInput)
  ) {
    alert(" invalid numbers");
    valid = false;
  } 
  else {
    firstInput = Number(firstInput);
    secondInput = Number(secondInput);
    valid = true;
    console.log(calculator(firstInput, operatorSign, secondInput));
  }
} while (valid == false);