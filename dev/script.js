// https://stackoverflow.com/a/26050234/7445342
var endDateTime = new Date(2022, 3, 10, 0, 0, 0, 0);
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

// // https://constantsolutions.dk/2020/06/delay-loading-of-google-analytics-google-tag-manager-script-for-better-pagespeed-score-and-initial-load/
// window.onload = document.addEventListener('DOMContentLoaded', () => {
// 	/** init gtm after 3500 seconds - this could be adjusted */
// 	setTimeout(initGTM, 3500);
// });
// window.onload = document.addEventListener('mousemove', initGTMOnEvent);
// window.onload = document.addEventListener('touchstart', initGTMOnEvent);

// function initGTMOnEvent (event) {
// 	initGTM();
// 	event.currentTarget.removeEventListener(event.type, initGTMOnEvent); // remove the event listener that got triggered
// }

// function initGTM () {
// 	if (window.gtmDidInit) {
// 		return false;
// 	}
// 	window.gtmDidInit = true; // flag to ensure script does not get added to DOM more than once.
// 	const script = document.createElement('script');
// 	script.type = 'text/javascript';
// 	script.async = true;
// 	script.onload = () => { dataLayer.push({ event: 'gtm.js', 'gtm.start': (new Date()).getTime(), 'gtm.uniqueEventId': 0 }); } // this part ensures PageViews is always tracked
// 	script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-116705068-1';

// 	document.head.appendChild(script);
// }

// function addGTMAttributes() {
//     window.dataLayer = window.dataLayer || [];
//     function gtag(){dataLayer.push(arguments);}
//     gtag('js', new Date());
    
//     gtag('config', 'UA-116705068-1');
// }

// window.onload = addGTMAttributes();
