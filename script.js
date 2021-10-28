let night = true;

let nightBtn = document.getElementById("night-mode");
let toggleBtn = document.getElementById("toggle-btn");
let navLinks = document.getElementsByClassName("nav-links")[0];
let white = "rgb(241, 241, 241)";
let black = "rgb(37, 37, 37)";
nightBtn.onclick = () => {
  document.documentElement.style.setProperty(
    "--main-bg-color",
    night ? black : white
  );
  document.documentElement.style.setProperty(
    "--main-color",
    night ? white : black
  );
  night = !night;
};

toggleBtn.onclick = () => {
  navLinks.classList.toggle("active");
};
navLinks.onclick = () => {
  navLinks.classList.toggle("active");
};
