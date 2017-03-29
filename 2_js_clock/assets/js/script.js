window.onload = function(){
  // need to get time
  var digital = document.querySelector('.digital'),
      hourHand = document.querySelector('.hour-hand'),
      minuteHand = document.querySelector('.min-hand'),
      secondHand = document.querySelector('.second-hand');

  function prettyTime(m,h,s){
    var min = m.toString().length === 1 ? `0${m}` : `${m}`,
        hr = h.toString().length === 1 ? `0${h}` : `${h}`,
        sec = s.toString().length === 1 ? `0${s}` : `${s}`;

    return `${hr}:${min}:${sec}`;
  }

  setInterval(updateTime, 1000);

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
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minDeg}deg)`;
    secondHand.style.transform = `rotate(${secDeg}deg)`;
  }

  // make a function to fire every second and update all of the above
}
