const tabLink = document.querySelectorAll(".tabs-title");
const tabContent = document.querySelectorAll(".tabs-content li");

//HIDE OTHER INACTIVE CONTENT 
tabLink.forEach((e) => {
  if (e.className != "tabs-title active") {
    document.getElementById(e.getAttribute("data-tab-link")).style.display =
      "none";
  }
});

const tabSwitcher = (evnt, tab) => {
  console.log(tab);
  console.log(evnt);

  tabLink.forEach((element) => {
    element.className = element.className.replace(" active", "");
  });

  tabContent.forEach((item) => {
    item.style.display = "none";
  });

  document.getElementById(tab.getAttribute("data-tab-link")).style.display =
    "block";
  evnt.currentTarget.className += " active";
};