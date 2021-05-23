//Current day
var today = moment();
var dateEl = document.getElementById('currentDay');
currentDay.innerHTML = today.format("dddd, MMMM Do YYYY");