// This is the object I want to store in local storage
tasks = {};

// I want this function to load local storage.  Nothing is calling it yet
var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
};

// The next 3 lines of code set up the date in the header.
var currentDay = document.querySelector("#currentDay");

var currentDate = moment();

currentDay.textContent = currentDate.format("dddd, MMM DD, YYYY");

auditTask = function() {
    var pancakes = [$("#9"), $("#10"), $("#11"), $("#12"), $("#13"), $("#14"), $("#15"), $("#16"), $("#17")];

    var pancakeTime = [$("#9").attr("id"), $("#10").attr("id"), $("#11").attr("id"), $("#12").attr("id"), $("#13").attr("id"), $("#14").attr("id"), $("#15").attr("id"), $("#16").attr("id"), $("#17").attr("id")] ;

    // var pancakes = $("#9");

    // var pancakeTime = pancakes.attr("id");

    var time = moment().format("H");

    console.log(pancakeTime.at(i));
    console.log(time);

    for (var i = 0, i < 7; i++) {
        if (pancakeTime.at(i) > time) {
            $(pancakes.at(i)).addClass("past");
            $(pancakes.at(i)).removeClass("present");
            $(pancakes.at(i)).removeClass("future");
        } else if (pancakeTime = time) {
            $(pancakes.at(i)).removeClass("past");
            $(pancakes.at(i)).addClass("present");
            $(pancakes.at(i)).removeClass("future");
        } else {
            $(pancakes.at(i)).removeClass("past");
            $(pancakes.at(i)).removeClass("present");
            $(pancakes.at(i)).addClass("future");
        };
    };

    // This if statement worked, so the problem is with my loop
        // if (pancakeTime.at(i) > time) {
        //     $(pancakes.at(i)).addClass("past");
        //     $(pancakes.at(i)).removeClass("present");
        //     $(pancakes.at(i)).removeClass("future");
        // } else if (pancakeTime = time) {
        //     $(pancakes.at(i)).removeClass("past");
        //     $(pancakes.at(i)).addClass("present");
        //     $(pancakes.at(i)).removeClass("future");
        // } else {
        //     $(pancakes.at(i)).removeClass("past");
        //     $(pancakes.at(i)).removeClass("present");
        //     $(pancakes.at(i)).addClass("future");
        // };
    
};

$("button").on("click", function() {
    var btnClicked = $(target);
    console.log(btnClicked.parent("<h2>"))

    // console.log(this)

});

auditTask()