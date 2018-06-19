var angle = 0;

function startPlanetRotation() {
	var planet = $('#mipt-planet');

	if (!planet.length) return;

	planet.css("animation-duration", "30s");
	planet.css("-webkit-animation-duration", "30s");
	planet.css("-moz-animation-duration", "30s");
	planet.css("-o-animation-duration", "30s");

	planet.css("animation-iteration-count", "infinite");
	planet.css("-webkit-animation-iteration-count", "infinite");
	planet.css("-moz-animation-iteration-count", "infinite");
	planet.css("-o-animation-iteration-count", "infinite");

	planet.css("animation-timing-function", "linear");
	planet.css("-webkit-animation-timing-function", "linear");
	planet.css("-mox-animation-timing-function", "linear");
	planet.css("-o-animation-timing-function", "linear");

	planet.css("animation-name", "rotation-" + Math.floor(angle));
}

function stopPlanetRotation() {
	var planet = $('#mipt-planet');

	if (!planet.length) return;

	angle = getCurrentRotationFixed("mipt-planet");

	planet.css("transform", "rotate(" + angle + "deg) translate(-50%, -50%)");
	planet.css("-webkit-transform", "rotate(" + angle + "deg) translate(-50%, -50%)");
	planet.css("-mox-transform", "rotate(" + angle + "deg) translate(-50%, -50%)");
	planet.css("-o-transform", "rotate(" + angle + "deg) translate(-50%, -50%)");

	planet.css("animation", "none");
	planet.css("-webkit-animation", "none");
	planet.css("-mox-animation", "none");
	planet.css("-o-animation", "none");
}