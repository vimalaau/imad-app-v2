//code for counter endpoint
var button = document.getElementById("counter");
var counter = 0;
button.onclick = function() {
  
      //create a request to the counterpoint
      var request = new XMLHttpRequest();
      
      
      // capture the response and store it in a variable
      request.onreadystatechange = function() {
          if(request.readystate === XMLHttpRequest.DONE) {
                //Take some action      
                 if(request.status === 200) {
                  var counter = request.responseText;   
                  var span = document.getElementById("count");
                  span.innerHTML = counter.toString();
                 }
          }
          //else not
      };
      
      //make a request
      request.open('GET', 'http://vimalaau.imad.hasura-app.io/counter', true);
      request.send(null);
      
};