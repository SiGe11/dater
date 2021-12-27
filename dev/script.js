// Assure functionality in case of the PHP call isn't working. Also unnecessary performance optimization. 
var endDateTime = new Date(2022, 3, 3, 0, 0, 0, 0);
var endStamp = endDateTime.getTime();

// Just to test php calls
var req = new XMLHttpRequest(); 
    req.onload = function() {
    endStamp =  this.responseText; 
 };
req.open("get", "targetdate.php", true); 
req.send();

var newDate = new Date();
var newStamp = newDate.getTime();

function updateClock() {
    newDate = new Date();
    newStamp = newDate.getTime();
    var diff = Math.round((endStamp - newStamp) / 1000);

    var d = Math.floor(diff / (24 * 60 * 60));
    diff = diff - (d * 24 * 60 * 60);
    var h = Math.floor(diff / (60 * 60));
    diff = diff - (h * 60 * 60);
    var m = Math.floor(diff / (60));
    diff = diff - (m * 60);
    var s = diff;

    document.getElementById("time-until").innerHTML = d + " nap, " + h + " óra, " + m + " perc, " + s + " másodperc";
}

window.addEventListener("DOMContentLoaded", function() {
    updateClock();
    setInterval(updateClock, 1000);
}, false);
