/* Set the width of the side navigation to 250px */
function openNav() {
	document.getElementById("sidenav").style.width = "250px";
	document.getElementById("top").style.marginLeft = "250px";
	document.getElementById("main").style.marginLeft = "250px";
	document.getElementById("bottom").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
	document.getElementById("sidenav").style.width = "0";
	document.getElementById("top").style.marginLeft = "0"
	document.getElementById("main").style.marginLeft = "0";
	document.getElementById("bottom").style.marginLeft = "0";
}

$(document).ready(function () {

	$('#nav-icon').click(function () {
		$(this).toggleClass('open');
		if ($(this).hasClass("open"))
			openNav();
		else
			closeNav();
	});

	$('.control').click(function() {
		$(this).toggleClass('pause play');
	});
});



