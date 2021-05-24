var taskEl = document.getElementsByClassName('task');
//empty array for inputted tasks
var storedTasks = [];

//Current day
var today = moment();
var dateEl = document.getElementById('currentDay');
currentDay.innerHTML = today.format("dddd, MMMM Do YYYY");

//colour change based on hour
var auditTask = function(taskEl) {
    console.log(taskEl);
  
}
var currentTime = moment().hour();
console.log(currentTime)

// load current tasks
var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    //if nothing is there
    if (!tasks) {
        tasks = {}
    }
}
//add text to task
//when task is clicked, do something
// $(".task").click(function(){
//     console.log("clicked")
//     var text = $(this)
//         .text()
//         .trim()
//     //create text area element
//     var textInput = $("<textarea>")
//     .addClass("form-control")
//     .val(text);
// })

$(".task").on("click", function() {
    console.log("click!");
    var text = $(this)
        .text()
        .trim();
// //create a new text area element
    var textInput = $("<textarea>")
        .addClass("form-control col-8")
        .val(text);
// //swap out existing <p> with new text area
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});



//blur event so textarea reverts back when something else is interacted with
$(".task").on("blur", "textarea", function() {
    //get current value/text
    var text = $(this)
        .val()
        .trim();
//
    var taskP = $("<p>")
        .addClass("m-1")
        .text(text);

//replace current p with inputted text
    $(this).replaceWith(taskP);

/*   var status = $(this)
        .closest(".task")
        .attr("id")
        .replace("task", "");

    var index = $(this)
    .closest(".task")
    .index();*/
});



//save task
var saveTask = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


loadTasks();
auditTask();