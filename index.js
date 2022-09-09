// determine current tab
const tabNameToNavItem = {
  "": "About Me",
  "index.html": "About Me",
  "portfolio.html": "Portfolio",
  "resume.html": "Resume",
};

const navBarItems = document.getElementsByClassName("nav-bar-link");
let tab = this.window.location.pathname.split("/");
tab = tab[tab.length - 1];
tab = tabNameToNavItem[tab];

function highlightTabInNav() {
  for (item of navBarItems) {
    if (item.innerHTML == tab) {
      item.style.fontWeight = "bold";
      console.log("set", item.innerHTML, "to bold");
    }
  }
}

function setStylesheet() {
  let styles = document.getElementById("styles");
  let currentStyle = localStorage.getItem("style");

  console.log(currentStyle, tab);

  if (tab == "About Me") {
    if (currentStyle == "V1") {
      styles.href = "./index.css";
    } else {
      styles.href = "./index2.css";
    }
  }
  if (tab == "Resume") {
    if (currentStyle == "V1") {
      styles.href = "./resume.css";
    } else {
      styles.href = "./resume2.css";
    }
  }
  if (tab == "Portfolio") {
    if (currentStyle == "V1") {
      styles.href = "./portfolio.css";
    } else {
      styles.href = "./portfolio2.css";
    }
  }
}

highlightTabInNav();
setStylesheet();

function swapStylesheet() {
  localStorage.setItem(
    "style",
    localStorage.getItem("style") == "V1" ||
      localStorage.getItem("style") == null
      ? "V2"
      : "V1"
  );

  setStylesheet();
}
