//getting the selector
var timeselector = document.getElementById("time");
var greetselector = document.getElementById("greetings");
var content = document.getElementById("content");
var nameselector = document.getElementById("name");



function formatTime() {
    let date = new Date();
    //console.log(date.getDate());
    //console.log(date.getTime());
    //console.log(date.getHours());
    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    //aetting the indication as AM or PM
    indication = 'AM';
    if (hour > 12) {
        indication = 'PM';
    }

    //converting a 24 hour time to a 12 hout format
    hour = hour % 12 > 0 ? hour % 12 : hour;
    console.log(timeselector.innerText);
    console.log(hour + ":" + min + ":" + sec + ":");
    timeselector.innerHTML = addZero(hour) + ":" + addZero(min) + ":" + addZero(sec) + " " +
        indication;
    setTimeout(formatTime, 1000);
}

/*
    Function to add zero 
    purpose: when the timer is running and if the seconds and hours are between 0 and 10 not
    including 10 then theere should be a zero added to the front of the timer
    parameter: input is the inputs from the min hout and time

*/
function addZero(input) {

    if (input < 10) {
        return '0' + input;
    }
    return input;
}

/*
    Function: formatDay
    Use: the function is to set the greetings for the day as Good morning| afternoon or the eveniing based of the hour of the day.
    returns: null
    sets: the #greetings id with the message

*/

function formatDay() {
    let date = new Date();
    if (date.getHours() < 12) {
        greetselector.innerHTML = "Good Morning";
    } else if (date.getHours() < 18) {
        greetselector.innerHTML = "Good afternoon";
    } else {
        greetselector.innerHTML = "Good Eveneing"
    }
}

function setName() {
    if (localStorage.getItem('name') === null) {
        nameselector.innerHTML = '[Enter name]';
    }
}

//Event adding
nameselector.addEventListener('keypress', setName);
nameselector.addEventListener('blur', setName);


//run
formatTime();
formatDay();