var button = document.getElementById("counter");

button.onclick = function() {
    
    // Make a request to the counter end
    
    
    //Capture the response and store it in a variable
    
    
    //Render the variable to the correct span
    
    counter = counter + 1;
    var span = document.getElementById("count");
    span.innerHtml = counter.toString();
};