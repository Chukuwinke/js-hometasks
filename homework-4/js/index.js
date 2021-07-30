function createNewUsers() {
  return {
    firstName: prompt(),
    lastName: prompt(),
    getLogin: function () {
      let letterArr = [...this.firstName];
      let result = letterArr[0] + this.lastName;
      return result.toLowerCase();
    },
  };
}
let newUser = new createNewUsers();
console.log(newUser.getLogin());