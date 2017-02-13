console.log('Loaded!');

// change the text of the id main-text

var element = document.getElementById('main-text');
element.innerHTML = 'New content';

// Move the image file
var img = document.getElementById('madi');

var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
madi.onclick = function() {
  var interval = setInterval(moveRight, 100);
};