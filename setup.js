//Document.ready
$(function () {
	getCookie();
  updateClock(time);
  startClock();
});

function getCookie () {
  var timeCookie = Cookies.getJSON('time');
  if (timeCookie != null) {
    time = timeCookie;
  }
}

function setCookie () {
  Cookies.set('time', time, {expires: 365});
}
