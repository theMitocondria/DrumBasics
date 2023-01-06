//////loop for knowing which code is pressed
for (var i = 0; i <=6; i++) {
  document.querySelectorAll("button")[i].addEventListener("click",clicked);
}




////////responding to keyboard pressees
document.addEventListener("keydown",function(event){
  var key=event.key;
  my(key);
  addAnimation(key);
})


///// button pressed call from add eventlistener
function clicked(){
  var text = this.textContent;
  my(text);
  addAnimation(text);

}



//// switch function used to make sounds
function my(para){
switch (para) {
  case "w":  var audio=new Audio('sounds/crash.mp3');
             audio.play();
             break;


  case "a":  var audio=new Audio('sounds/tom-4.mp3');
              audio.play();
              break;



  case "s":  var audio=new Audio('sounds/tom-3.mp3');
             audio.play();
             break;


  case "d":  var audio=new Audio('sounds/tom-1.mp3');
             audio.play();
             break;


  case "j":  var audio=new Audio('sounds/tom-2.mp3');
             audio.play();
             break;



  case "k":  var audio=new Audio('sounds/snare.mp3');
           audio.play();
           break;



  case "l":  var audio=new Audio('sounds/kick-bass.mp3');
          audio.play();
          break;


  default:break;

}
}



/////// adding animation to websites
function addAnimation(currentKey){
  var myAnimator=document.querySelector("."+currentKey);
   myAnimator.classList.add("pressed");

   setTimeout(function(){
     myAnimator.classList.remove("pressed");
   },150);  
}
