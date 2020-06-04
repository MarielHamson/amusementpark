$(document).ready(function() {
  let height = parseInt(prompt("How tall are you in cm?"));

  if (height >= 144.78 && height <= 195.65) {
    $("#adult-rides").addClass("yellow-background");
  } else if (height <= 144.78) {
    $("#kids-rides").addClass("pink-background");
  } else {
    $("#tall").addClass("green-background");
  }
});
