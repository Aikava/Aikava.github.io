const navPanel = document.querySelector(".site-nav-panel");
let navPanelHidden = true;

// add click catcher
function showNavPanel() {
  if (navPanel.classList.contains("out-screen"))
    navPanel.classList.remove("out-screen");
  else
    navPanel.classList.add("out-screen");
}
