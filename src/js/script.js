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

var updateSongTimer = setTimeout(updateSong, 0);

function updateSong() {
	$.get("https://phystech.tv/api/nowplaying", function(data) {
		var song = data[0].now_playing.song;
		$('#song-artist').html(song.artist);
		$('#song-title').html(song.title);
		updateSongTimer = setTimeout(updateSong, 5000);
		console.log(data[0]);

		var hist = data[0].song_history;
		$('#current-track').html(song.text);
		$('#last-track-1').html(hist[0].song.text);
		$('#last-track-2').html(hist[1].song.text)
		$('#last-track-3').html(hist[2].song.text)
		$('#next-track').html(data[0].playing_next.song.text)

	});
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
	});

	$('#playlist').click(function() {
		$('#myDropdown').toggleClass("show");
		$('#playlist-arrow').toggleClass("show");
	});

	$('#like').click(function () {
		$.post("https://us-central1-phystechradio.cloudfunctions.net/like", function () {
			console.log('like');
		});
	});

	$('#dislike').click(function () {
		$.post("https://us-central1-phystechradio.cloudfunctions.net/like", function () {
			console.log('dislike');
		});
	})

});



window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
};



// ************************************ //
// 				 Streaming				//
// ************************************ //

$(function () {

});
