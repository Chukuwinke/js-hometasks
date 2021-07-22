let userName;
let age;
let validation = false;

let credentialChecker = (userName, age) => {
  if (age < 18) {
    alert("You are not allowed to visit this website");
  } else if (age > 22) {
    document.getElementById("demo").innerHTML = "welcome, " + userName;
  } else {
    if (age >= 18 || age <= 22) {
      let confirmation = confirm("Are you sure you want to continue?");
      if (confirmation == true) {
        document.getElementById("demo").innerHTML = "welcome, " + userName;
      } else {
        document.getElementById("demo").innerHTML =
          "You are not allowed to visit this website ";
      }
    }
  }
};
do {
  userName = prompt("Enter your name", userName); // arguments added - Optional Task
  age = prompt("Enter your age", age); // arguments added - Optional Task
  age = Number(age);
  // Optional Task
  if (userName == "" || isNaN(age) || age == "") {
    alert("incorrect data");
    validation = false;
  } else {
    credentialChecker(userName, age);
    validation = true;
  }
} while (validation == false);
