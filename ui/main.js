console.log('Loaded!');
var img = document.getElementById('tech');
marginleft = 0;
function moveright(){
    marginleft = marginleft + 10;
    img.style.marginLeft = marginleft + 'px';
    
    
}
img.onclick = function(){
    var interval = setInterval(moveright,100);
    
    };