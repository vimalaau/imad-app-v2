console.log('Loaded!');

// change the text of the id main-text

var element = document.getElementById('main-text');
element.innerHTML = 'New content';

// Move the image file
var img = document.getElementById('madi');
img.onclick = function() {
    img.style.marginLeft = '1000px';
};