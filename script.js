var container;
var text = 'Ian Cugniere';
var index = 0;
document.addEventListener('DOMContentLoaded', function() {

	container = document.getElementById('name');
	text = container.innerText;
	container.innerHTML = '';
	type();
}, false);

function type(){
	container.innerHTML += text[index];
	index++;
	if(index < text.length) {
    	setTimeout(type, 500);
    }
}