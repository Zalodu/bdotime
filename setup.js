//Document.ready
$(function () {
  initButtons();
	getCookie();
  updateClock(time);
  //startClock();
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

function setCookie (timeData) {
  Cookies.set('time', timeData, {expires: 365});
}


function openSetup() {
  $("#clockWrapper").hide();
  $("#form").show();
}

function addInput () {
  time.hour = $("#hourInput").val();
  time.minute = $("#minuteInput").val();
  time.second = 0;
  var currentDate = new Date();
  var currentTime = currentDate.getTime();
  time.inputTime = currentTime;

  console.log(currentTime);
  console.log(currentDate.getTime());
  console.log(time.inputTime);

  setCookie(time);

  $("#form").hide();
  $("#clockWrapper").show();
}
