# Creating a Landing page 
## Technologies used
- javascript
- html
- css

## Features
- Clock time
- Dynamic loading of using the localstorage

## Functions
 - Function: formatTime()
   - Trigger: this is triggered every seconf and the time is updated every second
   - setTimeout(formatTime, 1000);
   - has to update the code to create an observer for the image to load only when the time to   change reaches
   
 - Function: formatDay()
   - Use: the function is to set the greetings for the day as Good morning| afternoon or the eveniing based of the hour of the day.
   - returns: null
   - sets: the #greetings id with the message

 - Function: setName
   - Triggered when the name tag is clicked and we start to type and save it by taking the pointer away. no need to call this function the event is constantly listening and calls when its fired.
   - event added: blur() and keypress()
   - storage: it is stored in the localstorage with the param name "name"
   - the parameter for the function: it has the details of the box we are editing all the key we press all the data we type inclusive
 
