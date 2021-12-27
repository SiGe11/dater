// https://stackoverflow.com/a/26050234/7445342
var endDateTime = new Date('Apr 03 2022 00:00:00 GMT+0200');

var endStamp = endDateTime.getTime();

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

setInterval(updateClock, 1000);
