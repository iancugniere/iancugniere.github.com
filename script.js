var text = $('#name').text();

var length = text.length;
var timeOut;
var character = 0;


(function typeWriter() { 
    timeOut = setTimeout(function() {
        character++;
        var type = text.substring(0, character);
        $('#name').text(type);
        typeWriter();
        
        if (character == length) {
            clearTimeout(timeOut);
        }           
    }, 150);
}());


/* QUESTIONS

http://stackoverflow.com/questions/19767069/letter-by-letter-text-appearance-animation-with-css
http://jsfiddle.net/kA8G8/7/

*/