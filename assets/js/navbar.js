header = document.getElementById("header");
content = document.getElementById("content");
const urlParams = new URLSearchParams(window.location.search);
const homeColors = [
  "#faf1f3",
  "#f9f2fc",
  "#fff8f2",
  "#f6f4eb",
  "#f2f2fc",
  "#fef5f3",
  "#f1f3f5",
  "#f1f7fb",
  "#fff4ec",
];
// fsr i have to set bg color using dom first or else it'll look funny
// update: i figured it out. but i won't fix it.
// you found secret bodge #1 !!!
document.body.style.background =
  homeColors[Math.floor(Math.random() * homeColors.length)];
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
  document.body.style.background =
    homeColors[Math.floor(Math.random() * homeColors.length)];
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
      // "s" stands for section
      urlParams.delete("s");
      // AI told me to do this sooo ¯\_(ツ)_/¯
      window.history.pushState({}, "", window.location.pathname);
    }
    header.removeEventListener("transitionend", arguments.callee);
  });
}

function setup(sect) {
  if (
    sect != "about" &&
    sect != "socials" &&
    sect != "projects" &&
    sect != "gallery"
  ) {
    alert(
      "only fools tamper with things they're not supposed to.\nyou are a fool.",
    );
    alert("p.s. i'm a fool too :>");
    return 1;
  }
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
  urlParams.set("s", sect);
  window.history.pushState(
    {},
    "",
    `${window.location.pathname}?${urlParams.toString()}`,
  );
  current = sect;
}

if (urlParams.has("s")) {
  setup(urlParams.get("s"));
}
