window.onload = function(){
  var inputs = document.querySelectorAll('input');

  inputs.forEach(el => el.onchange = inputHandler);

  function inputHandler(){
    console.log(this.value);
    document.documentElement.style.setProperty('--' + this.id,this.value);
  }
}
