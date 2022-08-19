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
var rows = document.getElementsByClassName("row");
var saveButtons = document.getElementsByClassName("btn");
var hourBlocks = document.getElementsByClassName("hour");
var inputBlocks = document.getElementsByClassName("form-control");
var inputContainers = document.getElementsByClassName("input-group");

var time = moment();

var scheduledEvent = "";
var hour = "";

var momentConversions = [9, 10, 11, 12, 13, 14, 15, 16, 17];

setInterval(getDate, 1000);

function getDate() {
  var date = moment().format("dddd, MMMM Do");
  $("#currentDay").text(date);
}

function colorSetter() {
  for (i = 0; i < hourBlocks.length; i++) {
    //get current time from hour block and convert to moment
    var scheduleText = hourBlocks[i].textContent.split(" ");
    var scheduleHour = scheduleText[0];
    var realHour = moment().format("H");
    var momentString = moment().hour(scheduleHour);

    if (moment.max(momentString, realHour) === realHour) {
      inputBlocks[i].setAttribute("class", "past");
    } else if (moment.max(momentString, realHour) === momentString) {
      inputBlocks[i].setAttribute("class", "future");
    } else {
      inputBlocks[i].setAttribute("class", "present");
    }

    // if (moment(momentString).isSame(time)) {
    //   // inputBlocks[i].setAttribute("class", "present");
    // } else if (moment(momentString).isBefore(time)) {
    //   inputBlocks[i].setAttribute("class", "past");
    // } else if (moment(momentString).isAfter(time)) {
    //   inputBlocks[i].setAttribute("class", "future");
    // }
  }
}

// colorSetter();

function saveEvent(event) {
  //retrieve user-inputted text from the correct row
  buttonClicked = event.target;
  for (i = 0; i < saveButtons.length; i++) {
    if (saveButtons[i] === buttonClicked) {
      hour = hourBlocks[i].textContent;
      scheduledEvent = inputBlocks[i].value;
    }
  }

  console.log(scheduledEvent);

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

colorSetter();
