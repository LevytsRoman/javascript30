window.onload = function(){
  var digital = document.querySelector('.digital'),
      hourHand = document.querySelector('.hour-hand'),
      minuteHand = document.querySelector('.min-hand'),
      secondHand = document.querySelector('.second-hand');

  function prettyTime(m,h,s){
    var hr = convertTime(h),
        min = convertTime(m),
        sec = convertTime(s);

    return `${hr}:${min}:${sec}`;
  }

  function convertTime(unit){
    return untit.toString().length === 1 ? `0${untit}` : `${untit}`
  }

  function rotate(el, deg){
    el.style.transform = `rotate(${deg}deg)`;
  }

  function updateTime(){
    var currentTime = new Date,
        hours = currentTime.getHours() > 12 ? currentTime.getHours() - 12 : currentTime.getHours(),
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds(),
        hourDeg = (hours * 360)/12 + 90,
        minDeg = (minutes * 360)/60 + 90,
        secDeg = (seconds * 360)/60 + 90;

    digital.innerHTML = prettyTime(hours, minutes, seconds);
    // set css transform: rotate(deg); for each of the above
    rotate(hourHand, hourDeg);
    rotate(minuteHand, minDeg);
    rotate(secHand, secDeg);
  }

  setInterval(updateTime, 1000);
}
