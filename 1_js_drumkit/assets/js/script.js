window.onload = function(){
  
  var drumKeys = document.querySelectorAll('.key');

  drumKeys.forEach((element) => element.addEventListener('transitionend', endOfTransitionHandler));
  document.addEventListener("keydown", onPressHandler);

  function onPressHandler(event){
    var key = document.querySelector(`div[data-key="${event.keyCode}"]`),
        sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);

    if(sound.duration > 0) sound.currentTime = 0;

    key.classList.add('playing');
    sound.play();
  }

  function endOfTransitionHandler(event){
    event.target.classList.remove('playing');
  }
};
