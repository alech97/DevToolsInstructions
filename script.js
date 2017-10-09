var devToolsOpen;

var element = document.createElement('any');
element.__defineGetter__('id', function() {
    devToolsOpen = true;
});

setInterval(function() {
	toggleDevTools(devToolsOpen);
    devToolsOpen = false;
    console.log(element);
    console.clear();
}, 500);

function toggleDevTools(check) {
	document.getElementById('devTools').style.display = (check) ? 'none' : 'block';
    document.getElementById('container').style.width = (check) ? '100%' : '50%';
    document.getElementById('progressBarCont').style.width = (50 + (check) * 50) + "%";
}

window.onscroll = function() {
	if (document.scrollingElement.scrollTop === 0) {
		document.getElementById('header').style.boxShadow = 'none';
		document.getElementById('header').style.webkitBoxShadow = 'none';
	}
	else {
		document.getElementById('header').style.position = 'sticky';
		document.getElementById('header').style.boxShadow = '0px 2px 2px rgba(0, 0, 0, 0.28)';
		document.getElementById('header').style.webkitBoxShadow = '0px 2px 2px rgba(0, 0, 0, 0.28)';
	}
};