var debug = true;
var container;
var headerLeft;
var text = 'Ian Cugnière';
var index = 0;
var footerOverlay;

document.addEventListener('DOMContentLoaded', function() {
	document.body.style.overflow = 'hidden';
	
	container = document.getElementById('name');
	container.innerHTML = '';
	headerLeft = document.getElementById('header_left');
	footerOverlay = document.getElementById('footer_overlay');
	type();

	if(debug) {
		allowScroll();
	} else {
		scroll(0,0);
	}
}, false);

window.addEventListener('scroll', checkScroll, false);

function type(){
	if(text[index] == ' ') {
		container.innerHTML += '<br />';	
	} else if(text[index] == 'r') {
		container.innerHTML += '<span id="capital">r</span>';
	} else {
		container.innerHTML += text[index];
	}
	
	index++;
	if(index < text.length) {
		setTimeout(type, 200);
	} else {
		setTimeout(allowScroll, 2000);
	}
}

function allowScroll() {
	document.body.style.overflow = 'auto';
}

function checkScroll() {
	//headerLeft.style.width = '%';
	var p = (100 - ((window.pageYOffset / window.innerHeight) * 100));
	if(window.pageYOffset > 0) {
		//headerLeft.style.width = p+'% !important';
		headerLeft.style.setProperty ("width", (p/2)+"%", "important");
		footerOverlay.style.setProperty ("opacity", 2*(window.pageYOffset / window.innerHeight), "important");
	} else {
		headerLeft.style.setProperty ("width", "50%", "important");

		footerOverlay.style.setProperty ("opacity", "0", "important");
	}
}