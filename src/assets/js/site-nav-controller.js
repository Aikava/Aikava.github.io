const navPanel = document.querySelector(".site-nav-panel");
const navPanelButton = document.querySelector(".site-nav-button");

function showNavPanel(event) {
  if (event && event.target === navPanel)
    return;

  const handleFadeIn = () => {
    navPanelButton.classList.remove("nav-button-cross");
    navPanelButton.classList.add("site-nav-close-button");
    navPanel.classList.remove("nav-fade-in");
    navPanel.removeEventListener("animationend", handleFadeIn);
    document.body.addEventListener("click", showNavPanel);
  };

  const handleFadeOut = () => {
    navPanelButton.classList.remove("site-nav-close-button");
    navPanelButton.classList.remove("nav-button-menu");
    navPanel.classList.add("hidden");
    navPanel.classList.remove("nav-fade-out");
    navPanel.removeEventListener("animationend", handleFadeOut);
    document.body.removeEventListener("click", showNavPanel);
  };

  if (navPanel.classList.contains("hidden")) {
    navPanelButton.classList.add("nav-button-cross");
    navPanel.classList.add("nav-fade-in");
    navPanel.classList.remove("hidden");
    navPanel.addEventListener("animationend", handleFadeIn);
  } else {
    navPanelButton.classList.add("nav-button-menu");
    navPanel.classList.add("nav-fade-out");
    navPanel.addEventListener("animationend", handleFadeOut);
  }
}
