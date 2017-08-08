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
    for(var i =0 ; i<comments.length ; i++)
    {
        list += '<li>'+comments[i]+'</li>'; 
        
        
    }
var ul = document.getElementById('cmt_list');
ul.innerHTML = list;

    
           
            
        }
    }
    
    
};
request.open('GET', 'http://singhabhimanyu186.imad.hasura-app.io/comment?comment='+comment_content, true);
request.send(null);
    
    
    
};
