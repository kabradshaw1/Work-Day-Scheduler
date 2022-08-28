tasks = {};

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
};

var currentDay = document.querySelector("#currentDay");

var currentDate = moment();

currentDay.textContent = currentDate.format("MMM, DD, YYYY");

// taskEl = document.querySelector("#task");

auditTask = function() {
    taskEl = document.querySelector("#task");
    console.log(taskEl)
};

$("button").on("click", function() {
    console.log(this)

});

auditTask()