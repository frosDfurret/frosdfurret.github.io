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
  document.title = "home - daguil";
  if (current !== null) {
    document.getElementById("link-" + current).style.fontWeight = "normal";
  }
  header.addEventListener("transitionend", function (event) {
    /*
    a reminder of bad, bad times:
    document.getElementById("about").style.display = "none";
    document.getElementById("socials").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("gallery").style.display = "none";
    */
    if (current !== null) {
      document.getElementById(current).style.display = "none";
    }
    header.removeEventListener("transitionend", arguments.callee);
  });
}

function setup(sect) {
  header.className = "movehead";
  content.style.opacity = "100%";
  document.body.style.background = bgColors[sect];
  document.title = sect + " - daguil";
  if (current !== null) {
    document.getElementById(current).style.display = "none";
    document.getElementById("link-" + current).style.fontWeight = "normal";
  }
  document.getElementById(sect).style.display = "flex";
  document.getElementById("link-" + sect).style.fontWeight = "bold";
  current = sect;
}
