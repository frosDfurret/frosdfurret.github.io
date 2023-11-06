redirect = window.localStorage.getItem("redirect")
if (redirect !== null) {
  if (redirect == "desktop" && !window.location['pathname'].includes("d")) {
    window.location = "/d/"
  }
  if (redirect == "mobile" && !window.location['pathname'].includes("m")) {
    window.location = "/m/"
  }
  if (redirect == "boring" && !window.location['pathname'].includes("boring.html")) {
    window.location = "/boring.html"
  }
} else {
  if (window.location['pathname'] !== "/") {
    window.location = "/"
  }
}