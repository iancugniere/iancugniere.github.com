var debug = false;
var container;
var headerLeft;
var text = 'Ian Cugnière';
var index = 0;
var footerOverlay;

var icons;
var scrollElements = [];

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

	icons = document.getElementsByClassName('icon');
	for(var i = 0, l = icons.length; i < l; i++) {
		scrollElements.push([icons[i], 'fadeIn', i*200, false]); // element, class, delay, triggered
	}

	window.addEventListener('scroll', checkScroll, false);
	checkScroll();
}, false);



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
	// Animate header on scroll
	var p = (100 - ((window.pageYOffset / window.innerHeight) * 100));
	if(window.pageYOffset > 0) {
		headerLeft.style.setProperty ("width", (p/2)+"%", "important");
		footerOverlay.style.setProperty ("opacity", 2*(window.pageYOffset / window.innerHeight), "important");
	} else {
		headerLeft.style.setProperty ("width", "50%", "important");

		footerOverlay.style.setProperty ("opacity", "0", "important");
	}

	for(var i = 0, l = scrollElements.length; i < l; i++) {
		if (!scrollElements[i][3]) {
			var h = getOffset(scrollElements[i][0]).top;
			if(h <= window.pageYOffset || h <= (window.pageYOffset + (document.body.clientHeight/1.7))) {
				addClassDelay(scrollElements[i][0], scrollElements[i][1], scrollElements[i][2]);
				
				scrollElements[i][3] = true;
			}
		}
	}
}

function addClassDelay(element, cssClass, delay) {
	setTimeout(function() {
		element.className = element.className+' '+cssClass;
	}, delay);
}

function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}