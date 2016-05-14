//Document.ready
$(function () {
  initButtons();
	getCookie();
  updateClock(time);
  startClock();
});

function initButtons () {
  $("#inputButton").click(addInput);
  $("#setupButton").click(openSetup);

  $("#hourInput").keypress(function(event){
    if (event.keyCode == 13)
    addInput();
  });
  $("#minuteInput").keypress(function(event){
    if (event.keyCode == 13)
    addInput();
  });
}

function getCookie () {
  var timeCookie = Cookies.getJSON('time');
  if (timeCookie != null) {
    time = timeCookie;
  }
  else openSetup();
}

function setCookie () {
  Cookies.set('time', time, {expires: 365});
}

function openSetup() {
  $("#clockWrapper").hide();
  $("#form").show();
}

function addInput () {
  time.hour = $("#hourInput").val();
  time.minute = $("#minuteInput").val();

  $("#form").hide();
  $("#clockWrapper").show();
}
