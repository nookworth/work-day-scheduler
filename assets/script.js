// var dateAndTime = moment().format("dddd, MMMM mo");
// $("#currentDay").text(dateAndTime);
// var saveButton1 = document.getElementById("btn1");
// var saveButton2 = document.getElementById("btn2");
// var saveButton3 = document.getElementById("btn3");
// var saveButton4 = document.getElementById("btn4");
// var saveButton5 = document.getElementById("btn5");
// var saveButton6 = document.getElementById("btn6");
// var saveButton7 = document.getElementById("btn7");
// var saveButton8 = document.getElementById("btn8");
// var saveButton9 = document.getElementById("btn9");

var saveButtons = document.getElementsByClassName("btn");

var scheduledEvent = "";
var hour = "";

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

function saveEvent(event) {
  //retrieve user-inputted text from the correct row
  scheduledEvent = event.target.parentElement;
  hour = event.target.parentElement;

  //text in corresponding field to local storage
  localStorage.setItem(hour, scheduledEvent);
  //check mark in input field to show event has been saved?
}

// saveButton1.addEventListener("click", saveEvent());
// saveButton2.addEventListener("click", saveEvent());
// saveButton3.addEventListener("click", saveEvent());
// saveButton4.addEventListener("click", saveEvent());
// saveButton5.addEventListener("click", saveEvent());
// saveButton6.addEventListener("click", saveEvent());
// saveButton7.addEventListener("click", saveEvent());
// saveButton8.addEventListener("click", saveEvent());
// saveButton9.addEventListener("click", saveEvent());

for (i = 0; i < saveButtons.length; i++) {
  saveButtons[i].addEventListener("click", saveEvent);
}
