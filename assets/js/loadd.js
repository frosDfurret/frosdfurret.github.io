// tried making this on my own but failed so i'm stealing it from https://stackoverflow.com/a/11071687

var imgs = document.images,
	len = imgs.length,
	counter = 0;

[].forEach.call(imgs, function(img) {
	if (img.complete)
		incrementCounter();
	else
		img.addEventListener('load', incrementCounter, false);
});

function incrementCounter() {
	counter++;
}

doCount = setInterval(function(){
  if (counter == len && document.getElementById('bg').currentTime > 1) {
  document.getElementById('load').classList.add('animate__slideOutUp')
  clearInterval(doCount)
  clearTimeout(wait)
  }
},100)