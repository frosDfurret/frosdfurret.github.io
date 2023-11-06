
image = document.getElementsByTagName('img')[0]
image.addEventListener("click", flash);
flashing = false
image.setAttribute('draggable', false);

function flash() {
  if (flashing == false) {
    image.src = "/assets/media/under-construction.gif"
    flashing = true
  } else {
    image.src = "/assets/media/under-construction-idle.png"
    flashing = false
  }
}
