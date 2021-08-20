// CREATING ELEMENTS AND STYLES
const input = document.createElement("div");
input.style.textAlign = "center";
input.style.margin = "300px auto";
input.style.width = "300px";
input.style.height = "75px";
input.style.lineHeight = "75px";
input.style.position = "relative";

const currentPrice = document.createElement("div");
currentPrice.style.position = "absolute";
currentPrice.style.bottom = "50px";
currentPrice.style.left = "100px";
currentPrice.style.lineHeight = "25px";

const invalidInput = document.createElement("div");
invalidInput.style.position = "absolute";
invalidInput.style.bottom = "1px";
invalidInput.style.lineHeight = "25px";
invalidInput.style.left = "90px";

// MAIN TASK
input.innerHTML = `
<label for='price'>price $ </label>
<input id='price' name='price'>
`;
document.body.appendChild(input);

const inputPrice = document.getElementById("price");
inputPrice.style.color = "#54E346";

//FOCUS AND UNFOCUS LOGIC
inputPrice.onfocus = () => {
  inputPrice.value = "";
  invalidInput.remove();
  input.style.background = "#28FFBF";
};
inputPrice.onblur = () => {
  input.style.background = "";
  if (inputPrice.value < 0 || inputPrice.value == "") {
    input.style.background = "red";
    input.appendChild(invalidInput);
    invalidInput.innerHTML = `<span>Please enter correct price</span>`;
  } else {
    input.appendChild(currentPrice);
    currentPrice.innerHTML = `
        <span>Current price $: ${inputPrice.value}</span>
         <i class="fa fa-close"></i>`;
    document.querySelector(".fa").onclick = () => {
      currentPrice.remove();
      inputPrice.value = "";
    };
  }
};