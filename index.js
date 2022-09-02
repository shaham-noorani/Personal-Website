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
