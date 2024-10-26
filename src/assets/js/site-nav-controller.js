const navPanel = document.querySelector(".site-nav-panel");

// add click catcher
function showNavPanel(event) {
  if (event && event.target === navPanel)
    return;
  const handleFadeIn = () => {
    navPanel.classList.remove("nav-fade-in");
    navPanel.removeEventListener("animationend", handleFadeIn);
    document.body.addEventListener("click", showNavPanel);
  };

    const handleFadeOut = () => {
      navPanel.classList.add("hidden");
      navPanel.classList.remove("nav-fade-out");
      navPanel.removeEventListener("animationend", handleFadeOut);
      document.body.removeEventListener("click", showNavPanel);
    };

  if (navPanel.classList.contains("hidden")) {
    navPanel.classList.add("nav-fade-in");
    navPanel.classList.remove("hidden");
    navPanel.addEventListener("animationend", handleFadeIn);
  } else {
    navPanel.classList.add("nav-fade-out");
    navPanel.addEventListener("animationend", handleFadeOut);
  }
}
