let divisables = [];
let userInput;

// VALIDATE USER INPUT (OPTIONAL-TASK)
const inputValid = userInput => {
  if (isNaN(userInput) || !Number.isInteger(userInput)) {
    return false;
  } else {
    return true;
  }
};

do {
  userInput = prompt("input number");
  userInput = Number(userInput);
  if (inputValid(userInput) == false) {
    alert("please input valid number");
  }
} while (inputValid(userInput) == false);

for (let counter = 0; counter <= userInput; counter++) {
  if (counter % 5 != 0) {
    continue;
  }
  divisables.push(counter);
}
if (divisables == false) {
  console.log("sorry no numbers");
} else {
  divisables.forEach((item) => {
    console.log(item);
  });
}
