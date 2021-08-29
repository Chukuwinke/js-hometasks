const tabLink = document.querySelectorAll(".tabs-title");
const tabContent = document.querySelectorAll(".tabs-content li");
const tabs = document.querySelector('.tabs');


//HIDE OTHER INACTIVE CONTENT 
tabLink.forEach((e) => {
  if (e.className != "tabs-title active") {
    document.getElementById(e.getAttribute("data-tab-link")).style.display =
      "none";
  }
});

const tabSwitcher = (target) => {
  tabLink.forEach((element) => {
    element.className = element.className.replace(" active", "");
  });

  tabContent.forEach((item) => {
    item.style.display = "none";
  });

  document.getElementById(target.getAttribute("data-tab-link")).style.display =
    "block";
  target.className += " active";
}

tabs.onclick = (event) => {
  let target = event.target;

  if(target.className != 'tabs-title') return;
  tabSwitcher(target);
}