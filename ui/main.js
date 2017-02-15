var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    
    // Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystateChange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            //Take some action
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    

//Make the request 
request.open('GET' , 'http://vimalaau.imad.hasura-app.io/counter', true);
request.send(null);
};

//submit name

var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    
    //create a req object
    var request = new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystateChange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            //Take some action
            if (request.status === 200) {
    //capturelist ofnames and render it as a list
    var names = request.responseText;
    names = JSON.parse(names);
    var list = '';
    for (i=0; i<names.length; i++) {
        list += '<li>' + names[i] + '</li>';
    }  
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
    
};