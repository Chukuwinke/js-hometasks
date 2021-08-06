function createNewUsers() {
  // VALIDATING USER INPUT (NOT PART OF THE HOMETASK)
  let inputValid;
  let firstName;
  let lastName;
  let birthday;
  do {
    firstName = prompt("Enter first name", firstName);
    lastName = prompt("Enter surname", lastName);
    birthday = prompt("Enter birthdate in format dd mm year", birthday);
    if (birthday == false || birthday == null) {
      console.log("input not correct");
      inputValid = false;
    } else {
      let birthdayDateItem = birthday.split(/[./, -]/gm);
      if (
        birthdayDateItem[1] > 12 ||
        birthdayDateItem[2].length < 4 ||
        birthdayDateItem[2].substr(0, 4) < 1920
      ) {
        console.log("invalid format");
        inputValid = false;
      } else {
        return {
          // HOMETASK
          firstName: firstName,
          lastName: lastName,
          birthday: birthdayDateItem,
          year: (yearString = birthdayDateItem[2]),
          month: (monthString = birthdayDateItem[1]),
          day: (dateString = birthdayDateItem[0]),
          getAge: function () {
            let year = this.year;
            let month = this.month;
            let day = this.day;
            const birthDate = new Date(year, month, day);
            const userBirthYear = birthDate.getFullYear();
            const currentYear = new Date();
            userAge = currentYear.getFullYear() - userBirthYear;
            return `the user is ${userAge} years old`;
          },
          getLogin: function () {
            let letterArr = [...this.firstName];
            let result = letterArr[0] + this.lastName;
            return result.toLowerCase();
          },
          getPassword: function () {
            let letterArr = [...this.firstName];
            let result = letterArr[0] + this.lastName;
            let newChar = result.substr(0, 1).toUpperCase();
            let newResult =
              result.replace(result.charAt(0), newChar) + this.year;
            return newResult;
          },
        };
      }
    }
  } while (inputValid == false);
}
let newUser = new createNewUsers();
console.log(newUser.getLogin());
console.log(newUser.getAge());
console.log(newUser.getPassword());
