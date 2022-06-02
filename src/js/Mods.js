export const getMods = () => {
  const darkBtn = document.getElementById("darkMode");
  const lightBtn = document.getElementById("lightMode");
  const section = document.getElementById("mods");
  
  lightBtn.addEventListener("click", function () {
    section.classList.add("ligth__mode");
  });
  darkBtn.addEventListener("click", function () {
    section.classList.remove("ligth__mode");
  });
};
