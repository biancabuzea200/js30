
window.addEventListener('keydown', function(e) {
    //use a attr selector
 // const audio = document.querySelector('audio[data-key=65]')
 const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
 if (!audio)return;
 //if hit in succession, rewinded
 audio.currentTime=0;
 audio.play();


 //this can be rewritten as 
 /*window.addEventListener('keydown', playSound(e));
 function playSound(e){
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currenttime=0; rewind to start
    audio.play();
    key.classList.add("playing");
 }
 window.addEventListener('keydown', playSound);
 */

 //FOR ANIMATION
 const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
 // next line is the same as key.classList.add('playing');
 key.classList.add('playing');

});

function removeTransition(e){
    if(e.propertyName!=='transform') return;
   this.classList.remove('playing');

}

const keys= document.querySelectorAll('.key');
//console.log(keys);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

