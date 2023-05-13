var endTime = new Date("August 10, 2023 00:00:00 UTC+8");
var endTime = (Date.parse(endTime)) / 1000;

// countdown
let timer = setInterval(function() {

  // get today's date
  var now = new Date();
	var now = (Date.parse(now) / 1000);

  // get the difference
  let diff = endTime - now;

  // // math
  var days = Math.floor(diff / 86400); 
  var hours = Math.floor((diff - (days * 86400)) / 3600);
  var minutes = Math.floor((diff - (days * 86400) - (hours * 3600 )) / 60);
  var seconds = Math.floor((diff - (days * 86400) - (hours * 3600) - (minutes * 60)));

  if (hours < "10") { hours = "0" + hours; }
  if (minutes < "10") { minutes = "0" + minutes; }
  if (seconds < "10") { seconds = "0" + seconds; }

  // display
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>days</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>hours</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>minutes</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>seconds</div> \
</div>";

}, 1000);
