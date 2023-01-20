import React,{useEffect} from 'react'
import FlipClock from 'flipclock';

export default function Timer() {
    var countdown, init_countdown, set_countdown;

countdown = init_countdown = function() {
  countdown = new FlipClock(document.querySelector('.countdown'), {
    clockFace: 'MinuteCounter',
    language: 'en',
    autoStart: false,
    countdown: true,
    showSeconds: true,
    callbacks: {
      start: function() {
        return console.log('The clock has started!');
      },
      stop: function() {
        return console.log('The clock has stopped!');
      },
      interval: function() {
        var time;
        time = this.factory.getTime().time;
        if (time) {
          return console.log('Clock interval', time);
        }
      }
    }
  });
  return countdown;
};

set_countdown = function(minutes, start) {
  var elapsed, end, left_secs, now, seconds;
  if (countdown.running) {
    return;
  }
  seconds = minutes * 60;
  now = new Date;
  start = new Date(start);
  end = start.getTime() + seconds * 1000;
  left_secs = Math.round((end - now.getTime()) / 1000);
  elapsed = false;
  if (left_secs < 0) {
    left_secs *= -1;
    elapsed = true;
  }
  countdown.setTime(left_secs);
  return countdown.start();
};
useEffect(() => {
    init_countdown();

    set_countdown(10, new Date());
  
}, [])


  return (
    <div>
        <div class="countdown-wrapper">
  <div id="countdown" class="countdown"></div>
</div>
    </div>
  )
}
