window.onload = function(){
  // need to get time
  var digital = document.querySelector('div'),
      hourHand = document.querySelector('.hour-hand'),
      minuteHand = document.querySelector('.min-hand'),
      secondHand = document.querySelector('.second-hand'),
      // debugger
      dialLength = hourHand.offsetWidth,
      hourLeft = hourHand.getBoundingClientRect().left,
      hourTop = hourHand.getBoundingClientRect().top,
      minLeft = minuteHand.getBoundingClientRect().left,
      minTop = minuteHand.getBoundingClientRect().top,
      secLeft = secondHand.getBoundingClientRect().left,
      secTop = secondHand.getBoundingClientRect().top;

  setInterval(updateTime, 1000);
  console.log(hourLeft);

  function updateTime(){
    var currentTime = new Date,
        hours = currentTime.getHours() > 12 ? currentTime.getHours() - 12 : currentTime.getHours(),
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds();
        digital.innerHTML =`${hours}:${minutes}:${seconds}`,
        hourDeg = (hours * 360)/12 + 90,
        minDeg = (minutes * 360)/60 + 90,
        secDeg = (seconds * 360)/60 + 90,
        hourX = dialLength * Math.sin(hourDeg),
        hourY = dialLength * Math.cos(hourDeg),
        minX = dialLength * Math.sin(minDeg),
        minY = dialLength * Math.cos(minDeg),
        secX = dialLength * Math.sin(secDeg),
        secY = dialLength * Math.cos(secDeg);

        // set css transform: rotate(deg); for each of the above
      hourHand.style.transform = `rotate(${hourDeg}deg)`;
      minuteHand.style.transform = `rotate(${minDeg}deg)`;
      secondHand.style.transform = `rotate(${secDeg}deg)`;
      hourHand.style.left = `${hourLeft + hourX}px`;
      hourHand.style.top = `${hourTop + hourY}px`;
      minuteHand.style.left = `${minLeft + minX}px`
      minuteHand.style.top = `${minTop + minY}px`
      secondHand.style.left = `${secLeft + secX}px`
      secondHand.style.top = `${secTop + secY}px`
  }

  // make a function to fire every second and update all of the above
}
