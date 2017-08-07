var counter = document.getElementById('counter');
var count = 0;

counter.onclick = function(){
    count = count+1;
    var countname = document.getElementById('count');
    
    countname.innerHTML = count.toString();
    };