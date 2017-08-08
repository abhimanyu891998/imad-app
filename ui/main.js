/*var counter = document.getElementById('counter');
counter.onclick = function(){
    var request = new XMLHttpRequest();
request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE ){
        
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
    
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //make a request to the server and send the name
    var nameinput = document.getElementById('name');
var name = nameinput.value;

     var request = new XMLHttpRequest();
request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE ){
        
        if(request.status === 200){
            
            
    var names = request.responseText;
    names = JSON.parse(names);
    
    var list = '';
    for(var i =0 ; i<names.length ; i++)
    {
        list += '<li>'+names[i]+'</li>'; 
        
        
    }
var ul = document.getElementById('namelist');
ul.innerHTML = list;

    
           
            
        }
    }
    
    
};
request.open('GET', 'http://singhabhimanyu186.imad.hasura-app.io/submit-name?name='+name, true);
request.send(null);
   

    
    
    
};


// js code for article pages

*/


var comment_button = document.getElementById('submit_cmt');
comment_button.onclick = function(){
    var comment_text = document.getElementById('cmt_txt');
    var comment_content = comment_text.value;
    
        var request = new XMLHttpRequest();
request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE ){
        
        if(request.status === 200){
            
            
    var comments = request.responseText;
    comments = JSON.parse(comments);
    
    var list = '';
    for(var i =0 ; i<names.length ; i++)
    {
        list += '<li>'+names[i]+'</li>'; 
        
        
    }
var ul = document.getElementById('cmt_list');
ul.innerHTML = list;

    
           
            
        }
    }
    
    
};
request.open('GET', 'http://singhabhimanyu186.imad.hasura-app.io/comment?comment='+comment_content, true);
request.send(null);
    
    
    
};






