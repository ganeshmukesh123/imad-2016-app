console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML='NEW Value';
//move image
var img=document.getElementById('madi');

var marginLeft=10;
var wi=screen.width;
function moveRight(){
    if(maginLeft<wi){
    marginLeft= marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
   }
   else{
       marginLeft=10;
   }

}
img.onclick=function(){
    var interval = setInterval(moveRight,50);
    
};