function openNav(){$("#sidenav").addClass("open"),$("#top").css("marginLeft","250px"),$("#main").css("marginLeft","250px"),$("#bottom").css("marginLeft","250px")}function closeNav(){$("#sidenav").removeClass("open"),$("#top").css("marginLeft","0"),$("#main").css("marginLeft","0"),$("#bottom").css("marginLeft","0")}var updateSongTimer=setTimeout(updateSong,0);function updateSong(){$.get("https://phystech.tv/api/nowplaying",function(t){var e=t[0].now_playing.song;$("#song-artist").html(e.artist),$("#song-title").html(e.title),updateSongTimer=setTimeout(updateSong,5e3);var n=t[0].song_history;$("#current-track").html(e.text),$("#last-track-1").html(n[0].song.text),$("#last-track-2").html(n[1].song.text),$("#last-track-3").html(n[2].song.text),$("#next-track").html(t[0].playing_next.song.text)})}function animateClick(t){t.removeClass("click-scale-animation"),t.width(),t.addClass("click-scale-animation")}$(function(){$("#nav-icon").click(function(){$(this).toggleClass("open"),$(this).hasClass("open")?openNav():closeNav()}),$("#hexagon").click(function(){animateClick($(this));var t=$(".button span"),e=document.getElementById("player");t.hasClass("play")?(document.getElementById("player").src="https://phystech.tv/radio/8000/fiztehradio",e.play()):(e.pause(),document.getElementById("player").src=""),t.toggleClass("play pause"),$(".button").toggleClass("play pause")}),$("#bottom").click(function(){var e=$("#bottom-text");$(this).toggleClass("open"),e.toggleClass("open"),$(this).hasClass("open")&&$.get("https://raw.githubusercontent.com/fiztehradio/daily-jokes/master/joke.txt",function(t){e.html(t)})});var t=document.getElementById("volume-control");noUiSlider.create(t,{start:[80],connect:[!0,!1],range:{min:0,max:100}}),t.noUiSlider.on("update",function(){player.volume=t.noUiSlider.get()/100}),$("#playlist").click(function(){$("#myDropdown").toggleClass("show"),$("#playlist").toggleClass("open"),$("#playlist-arrow").toggleClass("show"),$(".playlist-icon-circle").toggleClass("open"),$(".playlist-icon-line").toggleClass("open")}),$("#social").click(function(){$("#social").toggleClass("open"),$(".social-icon").toggleClass("open"),$(".social-icon-circle").toggleClass("open"),$(".social-icon-line").toggleClass("open")}),$("#like").click(function(){$.post("https://us-central1-phystechradio.cloudfunctions.net/like-node",function(){})}),$("#dislike").click(function(){$.post("https://us-central1-phystechradio.cloudfunctions.net/dislike-node",function(){})})}),$(function(){});