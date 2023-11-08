header = document.getElementById("header");
content = document.getElementById("content");
// fsr i have to set bg color using dom first or else it'll look funny
document.body.style.background = "#ddd";
current = null;
bgColors = {
  about: "#DBEEFA",
  socials: "#FFF4D6",
  projects: "#FFD6D8",
  gallery: "#EEF8DD",
};

function reset() {
  header.className = "";
  content.style.opacity = "0%";
  document.body.style.background = "#ddd";
  header.addEventListener("transitionend", function (event) {
    document.getElementById("about").style.display = "none";
    document.getElementById("socials").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("gallery").style.display = "none";
    header.removeEventListener("transitionend", arguments.callee);
  });
}

function setup(sect) {
  header.className = "movehead";
  content.style.opacity = "100%";
  document.body.style.background = bgColors[sect];
  if (current !== null) {
    document.getElementById(current).style.display = "none";
  }
  document.getElementById(sect).style.display = "block";
  current = sect;
}
