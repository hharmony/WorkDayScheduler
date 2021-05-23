//Current day
var today = moment();
var dateEl = document.getElementById('currentDay');
currentDay.innerHTML = today.format("dddd, MMMM Do YYYY");

//time audit
var auditTask = function(taskEl) {
    console.log(taskEl);
}


//add text to task
//when task is clicked, do something
$(".task").on("click", "p", function() {
    var text = $(this)
        .text()
        .trim();
        console.log(text);
//create a new text area element
    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);
//swap out existing <p> with new text area
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
        .text(tex);

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
