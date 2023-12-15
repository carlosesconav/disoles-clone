window.addEventListener("load", () => {
  const mainContent = document.getElementById("mainContent");
  if (mainContent) {
    mainContent.classList.remove("opacity-0");
    mainContent.classList.add("opacity-100");
  }
});
