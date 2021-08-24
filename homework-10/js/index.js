const toggleIcons = document.querySelectorAll(".fas");
const validateButton = document.querySelector(".btn");
const inputField = document.querySelectorAll(".input-wrapper > input");
const invalidWarning = document.createElement("span");

invalidWarning.style.display = "block";
invalidWarning.style.position = "absolute";
invalidWarning.style.width = "150px";
invalidWarning.style.left = "180px";
invalidWarning.style.color = "red";
invalidWarning.innerHTML = "You need to enter the identical values";

Array.from(toggleIcons).forEach((element) => {
  let passwordToggle = () => {
    let passwordIcon = element;
    let passwordField =
      passwordIcon.parentElement.querySelector(".password-field");
    if (passwordIcon.className == "fas fa-eye icon-password") {
      passwordIcon.className = passwordIcon.className.replace(
        "fa-eye",
        "fa-eye-slash"
      );
      passwordField.type = "password";
    } else {
      passwordIcon.className = passwordIcon.className.replace(
        "fa-eye-slash",
        "fa-eye"
      );
      passwordField.type = "text";
    }
  };
  element.addEventListener("click", passwordToggle);
});
validateButton.onclick = (event) => {
  event.preventDefault();
  if ((inputField[0].value &&inputField[1].value != "") 
    && inputField[0].value == inputField[1].value
  ) {
    alert("you are welcome");
  } else {
    let reEnter = inputField[1].parentElement;
    reEnter.style.position = "relative";
    reEnter.appendChild(invalidWarning);
  }
};
inputField.forEach(
  (element) => (element.onfocus = () => invalidWarning.remove())
);