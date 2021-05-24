var taskEl = document.getElementsByClassName('task')

//empty array for inputted tasks
var tasks = [];

//Current day
var today = moment();
var dateEl = document.getElementById('currentDay');
currentDay.innerHTML = today.format("dddd, MMMM Do YYYY");

//colour change based on hour  UNFINISHED
var auditTask = function() {
    var currentTime = moment().hour();
    $(".time-block").each(function(){
        var blockHour = parseInt($(this).children(".task").attr("id"));

        if (currentTime === blockHour) {
            $(".task").addClass("present");
        }
        else if (currentTime < blockHour) {
            $(".task").addClass("future");
        }
        else {
            $(".task").addClass("past");
        }
        });
};



//Trying to sort out the colour change based on time of day:

    // $(".time-block").each(function(index) {
    //     console.log(index);
    //     for (blockHour = ]; blockHour < 18; blockHour++) {
    //         if (blockHour === currentTime) {
    //             $(".task").addClass("present");
    //         }
    //     }
    // });
    // for(var blockHour = parseInt($(this).children(".task").attr("id")); blockHour < 18; blockHour++ ) {
    //     }
    //if time block > currenTime, addclass future
    // var blockHour = $(".time-block").each(function(index){
    //     console.log(blockHour)
    // }
    // });
    /* for () {
        if (blockHour > currentTime) {
            $(".task").addClass("future");
        }
}*/
// $(".time-block").each(function(){
//     var blockHour = parseInt($(this).children(".task").attr("id"));
//     // console.log(blockHour);
//         if (currentTime === blockHour) {
//             $(".task").addClass("present");
//     }
//     });
// $(".time-block").each(function(index) {
//     console.log(index)    
// })



// load current tasks UNFINISHED
var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    //if nothing is there
    if (!tasks) {
        tasks = {}
    };
};



//add text to task
$(".task").on("click", function() {
    //console.log("click!");
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
    var taskP = $("<p>")
        .addClass("item")
        .text(text);
//replace current p with inputted text
    $(this).replaceWith(taskP);

});


//save task on button click
$(".saveBtn").on("click", function() { 
    var index = $(".saveBtn").index(this);
    tasks[index] = $(this).parent().find(".item").text();
    localStorage.setItem("tasks", JSON.stringify(tasks));
});

//save to local storage
var saveTask = function(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
};


loadTasks();
auditTask();