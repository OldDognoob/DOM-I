
function newClock () {
    const currentDate = new Date();
    var currentHours = currentDate.getHours ();
    var currentMinutes = currentDate.getMinutes ();
    var currentSeconds = currentDate.getSeconds ();

    if (currentHours < 10) {
        currentHours = "0" + currentHours;
    }
    if(currentMinutes < 10){
        currentMinutes = "0" + currentMinutes;
    }
    if(currentSeconds < 10){
        currentSeconds = "0" + currentSeconds;
    }
    
    document.getElementById("currentHours").innerHTML = currentHours;
    document.getElementById("currentMinute").innerHTML = currentMinutes;
    document.getElementById("currentSeconds").innerHTML = currentSeconds;
}

setInterval(newClock, 100);