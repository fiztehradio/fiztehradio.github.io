function openNav() {
	$('#sidenav').addClass('open');
	$('#top').css('marginLeft', '250px');
	$('#main').css('marginLeft', '250px');
	$('#bottom').css('marginLeft', '250px');
}

function closeNav() {
	$('#sidenav').removeClass('open');
	$('#top').css('marginLeft','0');
	$('#main').css('marginLeft','0');
	$('#bottom').css('marginLeft','0');
}


$(document).ready(function () {

	$('#nav-icon').click(function () {
		$(this).toggleClass('open');
		if ($(this).hasClass("open"))
			openNav();
		else
			closeNav();
	});

	$('#hexagon').click(function() {
		var button = $('.button span');
		var player = document.getElementById('player');
		if (button.hasClass('play'))
		{
			player.play();
		}
		else
		{
			player.pause();
		}
		button.toggleClass('play pause');
	});

	$('#joke').click(function () {
		$.get( "https://raw.githubusercontent.com/fiztehradio/daily-jokes/master/joke.txt", function( data ) {
			$('#joke').css('font-weight', 400);
			$('#joke').css('cursor', 'default');
			$('#joke').html(data);
		});

	});


	var slider = document.getElementById('volume-control');

	noUiSlider.create(slider, {
		start: [80],
		connect: [true, false],
		range: {
			'min': 0,
			'max': 100
		}
	});

	slider.noUiSlider.on('update', function() {
		player.volume = slider.noUiSlider.get() / 100;
	})

});


// ************************************ //
// 				 Streaming				//
// ************************************ //

$(function () {

});
