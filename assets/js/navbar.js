header = document.getElementById('header')
// fsr i have to set bg color using dom first or else it'll look funny
document.body.style.background = "#ddd";
bgColors = {
	"about": "#DBEEFA",
	"socials": "#FFD6D8",
	"projects": "#FFF4D6",
	"gallery": "#EEF8DD"
}


function reset() {
	header.style.paddingTop = '32vh'
	document.body.style.background = "#ddd";
}

function setup(sect) {
	header.style.paddingTop = '100px'
	document.body.style.background = bgColors[sect]
}