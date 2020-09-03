//getting the selector
var timeselector = document.getElementById("time");
var greetselector = document.getElementById("greetings");
var content = document.getElementById("content");
var nameselector = document.getElementById("name");


/**
 * Function: formatTime()
 * Trigger: this is triggered every seconf and the time is updated every second
 * setTimeout(formatTime, 1000);
 * has to update the code to create an observer for the image to load only when the time to   change reaches
 */
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
    if (date.getHours() < 12 && date.getHours() > 4) {
        greetselector.innerHTML = "Good Morning";
    } else if (date.getHours() > 12 && date.getHours() < 18) {
        greetselector.innerHTML = "Good afternoon";
    } else {
        greetselector.innerHTML = "Good Eveneing"
    }
    setBg();
}

/*

    Function: setName
    Triggered when the name tag is clicked and we start to type and save it by taking the pointer away. no need to call this function the event is constantly listening and calls when its fired.
    even added: blur() and keypress()
    storage: it is stored in the localstorage with the param name "name"
    the parameter for the function: it has the details of the box we are editing all the key we press all the data we type inclusive

*/
function setName(keyevent) {
    if (keyevent === 'keypress') {
        if (keyevent.which == 13 || keyevent.keyCode == 13) {
            localStorage.setItem("name", keyevent.target.innerText);
            nameselector.blur();
        }
    } else {
        localStorage.setItem("name", keyevent.target.innerText);
    }
}

/**
 * 
 * Function: setBg(setting the background)
 * no even listeners are added
 * function trigger: when the hour is >4 and <12 then its morning so the morning image is added
 * when the hour is >12 and <18 then the afternoon image is added
 * when the hour is >18 and <4AM then the imaged added is night
 */
function setBg() {
    let date = new Date();
    if (date.getHours() < 12 && date.getHours() > 4) {
        document.body.style.backgroundImage = "url('/image/morning.jpg')";
        document.body.style.backgroundSize = 'fixed';
    } else if (date.getHours() > 12 && date.getHours() < 17) {
        document.body.style.backgroundImage = "url('/image/afternoon.jpg')";
        document.body.style.backgroundSize = 'fixed';
    } else {
        document.body.style.backgroundImage = "url('/image/night.jpg')";
        document.body.style.backgroundSize = 'fixed';
        document.body.style.color = 'white';
    }
}

//Event adding
nameselector.addEventListener('keypress', setName);
nameselector.addEventListener('blur', setName);


//run
formatTime();
formatDay();