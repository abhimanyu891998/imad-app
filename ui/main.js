var counter = document.getElementById('counter');
counter.onclick = function(){
    var request = new XMLHttpRequest();
request.onreadystatechange = function(){
    if(request.readystate === XMLHttpRequest.DONE ){
        
        if(request.status === 200){
           var count =  request.responseText;
            var countname = document.getElementById('count');
    countname.innerHTML = count.toString();
            
        }
    }
    
    
};
request.open('GET', 'http://singhabhimanyu186.imad.hasura-app.io/counter', true);
request.send(null);
   
    
    };