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
var lastVotedSongTitle;
var currentSongTitle;

function updateSong() {
	$.get("https://phystech.tv/api/nowplaying", function(data) {
		var song = data[0].now_playing.song;
		$('#song-artist').html(song.artist);
		$('#song-title').html(song.title);
		updateSongTimer = setTimeout(updateSong, 5000);

		var hist = data[0].song_history;
		$('#current-track').html(song.text);
		$('#last-track-1').html(hist[0].song.text);
		$('#last-track-2').html(hist[1].song.text);
		$('#last-track-3').html(hist[2].song.text);
		$('#next-track').html(data[0].playing_next.song.text)

		currentSongTitle = song.text;
		if (lastVotedSongTitle !== currentSongTitle)
		{
			$('#like').removeClass('voted');
			$('#dislike').removeClass('voted');
			$('.vote').addClass('can-vote');
		}
	});
}

function animateClick(e, a) {
	e.removeClass(a);
	e.width();
	e.addClass(a);
}



$(function () {

	$('#nav-icon').click(function () {
		$(this).toggleClass('open');
		if ($(this).hasClass("open"))
			openNav();
		else
			closeNav();
	});

	$('#hexagon').click(function() {

		// Запуск анимации
		animateClick($(this), "click-scale-animation");

		// Переключение кнопки play/pause
		var button = $('.button span');
		var player = document.getElementById('player');
		if (button.hasClass('play'))
		{
			document.getElementById('player').src = "https://phystech.tv/radio/8000/fiztehradio";
			player.play();
		}
		else
		{
			player.pause();
			document.getElementById('player').src = "";
		}
		button.toggleClass('play pause');
		$('.button').toggleClass('play pause');
	});

	$('#bottom').click(function () {

		var a = $('#bottom-text');
		$(this).toggleClass('open');
		a.toggleClass('open');

		if ($(this).hasClass('open')) {
			$.get( "https://raw.githubusercontent.com/fiztehradio/daily-jokes/master/joke.txt", function( data ) {
				a.html(data);
			});
		}
	});


	var slider = document.getElementById('volume-slider');

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

	$('#volume-minus').click(function() {
		player.volume = player.volume - 0.1;
		slider.noUiSlider.set(player.volume * 100);
	});

	$('#volume-plus').click(function() {
		player.volume = player.volume + 0.1;
		slider.noUiSlider.set(player.volume * 100);
	});

	$('#playlist').click(function() {
		$('#myDropdown').toggleClass('show');
		$('#playlist').toggleClass('open');
		$('#playlist-arrow').toggleClass('show');
		$('.playlist-icon-circle').toggleClass('open');
		$('.playlist-icon-line').toggleClass('open');
	});

	$('#social').click(function() {
		$('#social').toggleClass('open');
		$('.social-icon').toggleClass('open');
		$('.social-icon-circle').toggleClass('open');
		$('.social-icon-line').toggleClass('open');
		$('#playlist-and-social').toggleClass('open');
		$('.social-share').toggleClass('open');
	});


	$('#like').click(function () {
		if (lastVotedSongTitle === currentSongTitle)
		{
			console.log('already voted');
			return;
		}

		animateClick($(this), "like-click-scale-animation");
		$('.vote').removeClass('can-vote');

		lastVotedSongTitle = currentSongTitle;

		$.post("https://us-central1-phystechradio.cloudfunctions.net/like-node", function () {
			$('#like').toggleClass('voted');
		}).fail(function() {
			lastVotedSongTitle = "";
			$('.vote').addClass('can-vote');
		});

	});

	$('#dislike').click(function () {
		if (lastVotedSongTitle === currentSongTitle)
		{
			console.log('already voted');
			return;
		}

		animateClick($(this), "like-click-scale-animation");
		$('.vote').removeClass('can-vote');

		lastVotedSongTitle = currentSongTitle;

		$.post("https://us-central1-phystechradio.cloudfunctions.net/dislike-node", function () {
			$('#dislike').toggleClass('voted');
		}). fail(function() {
			lastVotedSongTitle = "";
			$('.vote').addClass('can-vote');
		});

	})

});