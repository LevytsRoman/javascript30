window.onload = function(){
  var digital = document.querySelector('.digital'),
      hourHand = document.querySelector('.hour-hand'),
      minHand = document.querySelector('.min-hand'),
      secHand = document.querySelector('.second-hand');
      currentTime = new Date,
      hours = currentTime.getHours() > 12 ? currentTime.getHours() - 12 : currentTime.getHours(),
      minutes = currentTime.getMinutes(),
      seconds = currentTime.getSeconds(),
      hourDeg = (hours * 360)/12 + 90 + 30,
      minDeg = (minutes * 360)/60 + 90 + 6,
      secDeg = (seconds * 360)/60 + 90 + 6;

  function prettyTime(h,m,s){
    var hr = convertTime(h),
        min = convertTime(m),
        sec = convertTime(s);

    return `${hr}:${min}:${sec}`;
  }

  function convertTime(unit){
    return unit.toString().length === 1 ? `0${unit}` : `${unit}`
  }

  function rotate(el, deg){
    el.style.transform = `rotate(${deg}deg)`;
  }

  function updateTime(){
    var currentTime = new Date,
        hours = currentTime.getHours() > 12 ? currentTime.getHours() - 12 : currentTime.getHours(),
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds();

    digital.innerHTML = prettyTime(hours, minutes, seconds);

    rotate(hourHand, hourDeg);
    rotate(minHand, minDeg);
    rotate(secHand, secDeg);

    hourDeg += 360/60/60/12
    minDeg += 360/60/60
    secDeg += 360/60
  }

  setInterval(updateTime, 1000);
}
