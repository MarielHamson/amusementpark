$(document).ready(function() {
  let height = parseInt(prompt("How tall are you in cm?"));

  if (height >= 144.78 && height <= 195.65) {
    $('#adult-rides').show();
  } else if (height <= 144.78) {
    $('#kids-rides').show();
  } else {
    $('#tall').show();
    $('#too-tall').show();
  }
});