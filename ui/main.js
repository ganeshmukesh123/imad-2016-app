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
    var request = new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML=counter.toString();
            
            }
        }
    };
    //make request
    request.open('GET','http://ganeshmukesh123.imad.hasura-app.io/counter',true);
    request.send(null);
};

var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    
    
    
     var request = new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                 var names =request.responseText;
                 names=JSON.parse(names);
    var list='';
    for (var i=0;i< names.length; i++){
        list+='<li>' + names[i] +'</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
            
            }
        }
    };
   var nameInput = document.getElementById('name');
var name = nameInput.value;
    request.open('GET','http://ganeshmukesh123.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
};