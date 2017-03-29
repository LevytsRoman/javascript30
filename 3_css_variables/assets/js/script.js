window.onload = function(){
  var inputs = document.querySelectorAll('input');

  inputs.forEach(el => el.onchange = inputHandler);
  inputs.forEach(el => el.onmousemove = inputHandler);


  function inputHandler(){
    document.documentElement.style.setProperty('--' + this.id,this.value);
  }
}
