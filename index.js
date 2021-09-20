var startDateTime = new Date(2021, 6, 5, 03, 00);
var startStamp = startDateTime.getTime();
var newDate = new Date();
var newStamp = newDate.getTime();
var timer;

function updateClock() {
  newDate = new Date();
  if (newDate.getDate() == startDateTime.getDate()) {
    if (newDate.getMonth() == startDateTime.getMonth()) {
      let totalYear = newDate.getFullYear() - startDateTime.getFullYear();
      document.getElementById("time-elapsed").innerHTML =
        totalYear + " " + (totalYear == 1 ? "Year" : "Years");
    } else {
      let totalMonth =
        newDate.getMonth() -
        startDateTime.getMonth() +
        12 * (newDate.getFullYear() - startDateTime.getFullYear());
      document.getElementById("time-elapsed").innerHTML =
        totalMonth + " " + (totalMonth == 1 ? "Month" : "Months");
    }
    return;
  }
  newStamp = newDate.getTime();
  var diff = Math.round((newStamp - startStamp) / 1000);
  var d = Math.floor(diff / (24 * 60 * 60));
  if (d % 7 == 0) {
    let totalWeeks = d / 7;
    document.getElementById("time-elapsed").innerHTML =
      totalWeeks + " " + (totalWeeks == 1 ? "Week" : "Weeks");
    return;
  }
  document.getElementById("time-elapsed").innerHTML =
    d + " " + (d == 1 ? "Day" : "Days");
}
timer = setInterval(updateClock, 1000);
