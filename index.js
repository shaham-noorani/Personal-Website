const tabNameToNavItem = {
  "index.html": "About Me",
  "portfolio.html": "Portfolio",
  "resume.html": "Resume",
};

const navBarItems = document.getElementsByClassName("nav-bar-link");
let tab = this.window.location.pathname.split("/")[3];
let currentNavItem = tabNameToNavItem[tab];

for (item of navBarItems) {
  if (item.innerHTML == currentNavItem) {
    item.style.fontWeight = "bold";
  }
}

function swapStylesheet(page) {
  var styles = document.getElementById("styles");

  if (page == "landing-page") {
    if (styles.href.includes("index.css")) {
      styles.href = "./index2.css";
    } else if (styles.href.includes("index2.css")) {
      styles.href = "./index.css";
    }
  }
  if (page == "portfolio-page") {
    if (styles.href.includes("portfolio.css")) {
      styles.href = "./portfolio2.css";
    } else if (styles.href.includes("portfolio2.css")) {
      styles.href = "./portfolio.css";
    }
  }
  if (page == "resume-page") {
    if (styles.href.includes("resume.css")) {
      styles.href = "./resume2.css";
    } else if (styles.href.includes("resume2.css")) {
      styles.href = "./resume.css";
    }
  }
}
