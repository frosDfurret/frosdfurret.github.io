const images = ['sfday.jpg', 'stationstairs.jpg', 'subway.jpg', 'street.jpg', 'sky.jpg'];
const randomImage = images[Math.floor(Math.random() * images.length)];
console.log(randomImage)
const bg = document.createElement("img");
bg.id = "img-bg";
bg.src = './assets/img/' + randomImage;
console.log(bg.src)
document.body.insertBefore(bg, document.body.firstChild);
const load = setInterval(function() {
  if (bg.complete) {
    clearInterval(load);
	const b4 = document.getElementById("b4-loading");
	b4.style.opacity = "0%";
	setTimeout(function(){b4.style.display = "none";},500);
  }
}, 1000);
