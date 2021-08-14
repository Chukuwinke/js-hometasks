const items = ["hello", "world", "Baku", "IBA Tech Academy", "2019"];

const list = document.createElement("ul");
document.body.appendChild(list);
const listCreator = (item) => {
  console.log(item);
  list.insertAdjacentHTML("beforeend", `<li> ${item} </li>`);
};
items.map(listCreator);
