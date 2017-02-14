var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    
    // Make a request to the counter end
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystateChange = function() {
        if(request.readyState === XMLHttpRequest.Done) {
            
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