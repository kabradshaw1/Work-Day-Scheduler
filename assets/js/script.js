tasks = {};

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
};

var currentDay = document.querySelector("#currentDay");

var currentDate = moment();

// console.log(currentDate)

var currentHour = currentDate.format("")
currentDay.textContent = currentDate.format("dddd, MMM DD, YYYY");

// taskEl = document.querySelector("#task");

auditTask = function() {
    var pancakes = $("#9");

    var pancakeTime = pancakes.attr("id")

    var time = moment().format("h")

    console.log(pancakeTime)
    console.log(time)
    if (pancakeTime > time) {
        $(pancakes).addClass("past");
        $(pancakes).removeClass("present")
        $(pancakes).removeClass("future")
    } 
       
};
$("button").on("click", function() {
    var btnClicked = $(target);
    console.log(btnClicked.parent("<h2>"))

    // console.log(this)

});

auditTask()