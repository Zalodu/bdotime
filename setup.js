//Document.ready
$(function () {
	getCookie();

});

function getCookie () {
  var timeCookie = Cookies.getJSON('time');
  if (timeCookie != null) {
    time = timeCookie;
    updateClock(time);
  }
}

function setCookie () {
  Cookies.set('time', time, {expires: 365});
}
