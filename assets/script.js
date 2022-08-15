// var dateAndTime = moment().format("dddd, MMMM mo");
// $("#currentDay").text(dateAndTime);
setInterval(getDate, 1000);

function getDate() {
  var date = moment().format("dddd, MMMM Mo");
  $("#currentDay").text(date);
}

// function colorSetter() {
//   var time = moment().format("hh");
//   console.log(time);
// }

// colorSetter();
