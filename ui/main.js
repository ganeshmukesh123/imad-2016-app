/*console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML='NEW Value';
//move image
var img=document.getElementById('madi');

var marginLeft=10;
var wi=screen.width;
function moveRight(){
    
    marginLeft= marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick=function(){
    var interval = setInterval(moveRight,50);
    
};



*/
var button=document.getElementById("counter");

button.onclick= function(){
    //Create requestobject
    var request= new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
                var counter = request.responseText;
                var span=document.getElementById("count");
                span.innerHTML=counter.toString();
            
            }
        }
    };
    //make request
    request.open('GET','http://ganeshmukesh123.imad.hasura-app.io/counter',true);
    request.send(null);
};
};