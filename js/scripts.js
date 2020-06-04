$(document).ready(function() {
  let height = parseInt(prompt("How tall are you in cm?"));

  if (height >= 144.78 && height <= 195.65) {
    $("ul.adult").addClass("yellow-background");
  } else if (height <= 144.78) {
    $("ul.kids").addClass("pink-background");
  } else {
    $("ul.tall").addClass("green-background");
  }
});
