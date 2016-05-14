/*
  Ingame hour(day) in real milliseconds: 800000ms
  Ingame minute(day) in real milliseconds: 800000/60 = 13333.3333ms
  Ingame second(day) in real milliseconds: 13333/60 = 222.2222ms

  Ingame hour(night) in real seconds: 300000ms
  Ingame minute(day) in real seconds: 300000/60 = 5000ms
  Ingame second(day) in real milliseconds: 5000/60 = 83.3333ms
*/

var time = {
  "hour": 0,
  "minute": 0,
  "second": 0
}

function updateClock (timeData) {
  $("#clock").html(toString(timeData))
}

function toString (timeData) {
  var string = timeData.hour > 9 ? timeData.hour : "0" + timeData.hour;
  string += ":";
  string += timeData.minute > 9 ? timeData.minute : "0" + timeData.minute;
  string += ":";
  string += timeData.second > 9 ? timeData.second : "0" + timeData.second;

  return string;
}

function startClock () {
  if (time.hour > 7 && time.hour < 22) { //day
    setTimeout(function () {
      tickSecond();

      updateClock(time);
      setCookie();
      startClock();
    }, 222);
  }
  else { //night
    setTimeout(function () {
      tickSecond();

      updateClock(time);
      setCookie();
      startClock();
    }, 83);
  }
}

function tickHour () {
  if (time.hour < 23) time.hour++;
  else time.hour = 0;
}

function tickMinute () {
    if (time.minute < 59) time.minute++;
    else {
      time.minute = 0
      tickHour();
    };
}

function tickSecond () {
    if (time.second < 59) time.second++;
    else {
      time.second = 0;
      tickMinute();
    }
}
