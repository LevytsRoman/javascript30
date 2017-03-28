window.onload = function(){
  // get all the drum keys
  var drumKeys = document.querySelectorAll('.key');

  // assign a transitionEnd event listener to each key to know when to remove playing class
  drumKeys.forEach((element) => element.addEventListener('transitionend', endOfTransitionHandler));

  // assign listener to set what happens when a key is pressed
  document.addEventListener("keydown", onPressHandler);

  // function runs when a key is pressed
  function onPressHandler(event){
    // get the key pressed and find the appropriate audio file
    var key = document.querySelector(`div[data-key="${event.keyCode}"]`),
        sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);

    // reset the duration incase sound is already playing
    if(sound.duration > 0) sound.currentTime = 0;

    // add new class to animate pressed button
    key.classList.add('playing');

    // play the audiofile
    sound.play();
  }

  // function fires when css transition property ends
  function endOfTransitionHandler(event){
    // remove class playing to restore buttons to default style
    event.target.classList.remove('playing');
  }
};
