function openNav(){$("#nav-icon").addClass("open"),$("#sidenav").addClass("open"),$("#top").css("margin-left","-100px"),$("#main").css("margin-left","-100px"),$("#bottom").css("margin-left","-100px"),$("#playlist-mobile").css("margin-left","-100px"),$("#share-mobile").css("margin-right","100px"),$("#logo-text").addClass("open")}function closeNav(){$("#nav-icon").removeClass("open"),$("#sidenav").removeClass("open"),$("#top").css("margin-left","0"),$("#main").css("margin-left","0"),$("#bottom").css("margin-left","0"),$("#playlist-mobile").css("margin-left","0"),$("#share-mobile").css("margin-right","0"),$("#logo-text").removeClass("open")}function toggleNav(t){t.hasClass("open")?closeNav():openNav()}var lastVotedSongTitle,currentSongTitle,updateSongTimer=setTimeout(updateSong,0);function updateSong(){$.get("https://phystech.tv/api/nowplaying",function(t){if(t[0].live.is_live)$("#song-artist").html("Физтех.Радио"),$("#song-title").html(t[0].streamer_name);else{var e=t[0].now_playing.song;$("#song-artist").html(e.artist),$("#song-title").html(e.title),updateSongTimer=setTimeout(updateSong,5e3);var l=t[0].song_history;$(".current-track").html(e.text),$(".last-track-1").html(l[0].song.text),$(".last-track-2").html(l[1].song.text),$(".last-track-3").html(l[2].song.text),$(".next-track").html(t[0].playing_next.song.text),currentSongTitle=e.text,lastVotedSongTitle!==currentSongTitle&&($("#like").removeClass("voted"),$("#dislike").removeClass("voted"),$(".vote").addClass("can-vote"))}})}function animateClick(t,e){t.removeClass(e),t.width(),t.addClass(e)}var bottomClickCounter=0;$(function(){$(".playlist").html('\t\t\t<div class="playlist-icon">\n<div class="icon-circle playlist-icon-circle"></div>\n<div class="icon-line playlist-icon-line"></div>\n<div class="icon-circle playlist-icon-circle"></div>\n<div class="icon-line playlist-icon-line"></div>\n<div class="icon-circle playlist-icon-circle"></div>\n<div class="icon-line playlist-icon-line"></div>\n</div>\n<div class="dropdown">\n<div class="dropdown-content">\n<a class="previous-track last-track-3"></a>\n<a class="previous-track last-track-2"></a>\n<a class="previous-track last-track-1"></a>\n<a class="current-track"></a>\n<a class="next-track "></a>\n<div class="playlist-arrow"></div>\n</div>\n</div>'),$(".share").html('\x3c!--<a class="share-twitter share-social white-circle">--\x3e\n\x3c!--<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.84 27.49"><title>Twitter</title>--\x3e\n\x3c!--<path d="M33.84,3.25a14,14,0,0,1-4,1.1,7,7,0,0,0,3-3.84,14,14,0,0,1-4.42,1.68,6.94,6.94,0,0,0-12,4.75,7.43,7.43,0,0,0,.18,1.58A19.7,19.7,0,0,1,2.36,1.27,6.92,6.92,0,0,0,4.5,10.53a7,7,0,0,1-3.14-.86v.08a7,7,0,0,0,5.57,6.82,7.34,7.34,0,0,1-1.83.23,7.17,7.17,0,0,1-1.31-.12,7,7,0,0,0,6.49,4.82,14,14,0,0,1-8.63,3A15.07,15.07,0,0,1,0,24.37a19.59,19.59,0,0,0,10.65,3.12c12.76,0,19.74-10.57,19.74-19.74l0-.9a13.81,13.81,0,0,0,3.47-3.6Z"--\x3e\n\x3c!--fill="#ef4145"/>--\x3e\n\x3c!--</svg>--\x3e\n\x3c!--</a>--\x3e\n<a class="share-vk share-social white-circle" href="https://vk.com/share.php?url=https://radiomipt.ru" target="_blank">\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.42 20.78"><title>ВКонтакте</title>\n<path d="M17.82,20.69H20a1.84,1.84,0,0,0,1-.43,1.61,1.61,0,0,0,.3-1s0-2.92,1.31-3.35,3.06,2.82,4.87,4.07a3.45,3.45,0,0,0,2.43.74l4.86-.07s2.54-.16,1.34-2.16c-.1-.16-.71-1.48-3.62-4.18s-2.64-2.37,1-7.27c2.24-3,3.14-4.8,2.86-5.58S34.45,1,34.45,1L29,1a1.23,1.23,0,0,0-.71.12,1.58,1.58,0,0,0-.48.59,31.52,31.52,0,0,1-2,4.27c-2.43,4.14-3.41,4.36-3.81,4.1-.93-.6-.69-2.41-.69-3.69,0-4,.6-5.69-1.19-6.12A9.6,9.6,0,0,0,17.51,0,11.76,11.76,0,0,0,13,.47c-.62.3-1.1,1-.81,1a2.46,2.46,0,0,1,1.62.82,5.26,5.26,0,0,1,.54,2.47s.32,4.73-.76,5.31c-.73.41-1.75-.41-3.92-4.17a36.8,36.8,0,0,1-2-4,1.59,1.59,0,0,0-.45-.61A2.22,2.22,0,0,0,6.39.92L1.19,1S.41,1,.12,1.31s0,.93,0,.93,4.07,9.53,8.69,14.34a12.49,12.49,0,0,0,9,4.11"\nfill="#ef4145"/>\n</svg>\n</a>\n<a class="share-facebook share-social white-circle" href="https://www.facebook.com/sharer/sharer.php?u=https://radiomipt.ru" target="_blank">\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.25 38.99"><title>Facebook</title>\n<path d="M13.12,39V21.22h5.94L20,14.31H13.12V9.88c0-2,.54-3.35,3.46-3.35h3.67V.27A43.37,43.37,0,0,0,14.91,0C9.61,0,6,3.24,6,9.18v5.13H0v6.91H6V39Z"\nfill="#ef4145"/>\n</svg>\n</a>\n<div class="share-top white-circle">\n<div class="share-icon">\n<div class="icon-circle share-icon-circle"></div>\n<div class="icon-line share-icon-line"></div>\n<div class="icon-circle share-icon-circle"></div>\n<div class="icon-line share-icon-line"></div>\n<div class="icon-circle share-icon-circle"></div>\n</div>\n</div>'),$("#logo-text").click(function(){toggleNav($(this))}),$("#nav-icon").click(function(){toggleNav($(this))});var e=document.getElementById("player");if($("#hexagon").click(function(){animateClick($(this),"click-scale-animation");var t=$(".button span");t.hasClass("play")?(document.getElementById("player").src="https://phystech.tv/radio/8000/fiztehradio",e.play(),yaCounter50134423.reachGoal("PLAY")):(e.pause(),document.getElementById("player").src="",yaCounter50134423.reachGoal("PAUSE")),t.toggleClass("play pause"),$(".button").toggleClass("play pause")}),!!navigator.platform&&/iP(hone|od|ad)/.test(navigator.platform))$("#volume-controls").css("visibility","hidden");else{var t=document.getElementById("volume-slider");noUiSlider.create(t,{start:[80],connect:[!0,!1],range:{min:0,max:100}}),t.noUiSlider.on("update",function(){e.volume=t.noUiSlider.get()/100}),$("#volume-minus").click(function(){e.volume=e.volume-.1,t.noUiSlider.set(100*e.volume)}),$("#volume-plus").click(function(){e.volume=e.volume+.1,t.noUiSlider.set(100*e.volume)})}$(".playlist").click(function(){$(".dropdown-content").toggleClass("show"),$(".playlist").toggleClass("open"),$(".playlist-arrow").toggleClass("show"),$(".playlist-icon-circle").toggleClass("open"),$(".playlist-icon-line").toggleClass("open"),yaCounter50134423.reachGoal("PLAYLIST")}),$(".share").click(function(){$(".share-top").toggleClass("open"),$(".share-icon").toggleClass("open"),$(".share-icon-circle").toggleClass("open"),$(".share-icon-line").toggleClass("open"),$(".share-social").toggleClass("open"),yaCounter50134423.reachGoal("SHARE")}),$("#like").click(function(){lastVotedSongTitle!==currentSongTitle?(animateClick($(this),"like-click-scale-animation"),$(".vote").removeClass("can-vote"),lastVotedSongTitle=currentSongTitle,$("#like").toggleClass("voted"),$.post("https://us-central1-phystechradio.cloudfunctions.net/like-node",function(){}).fail(function(){lastVotedSongTitle="",$(".vote").addClass("can-vote")}),yaCounter50134423.reachGoal("LIKE")):console.log("already voted")}),$("#dislike").click(function(){lastVotedSongTitle!==currentSongTitle?(animateClick($(this),"like-click-scale-animation"),$(".vote").removeClass("can-vote"),lastVotedSongTitle=currentSongTitle,$("#dislike").toggleClass("voted"),$.post("https://us-central1-phystechradio.cloudfunctions.net/dislike-node",function(){}).fail(function(){lastVotedSongTitle="",$(".vote").addClass("can-vote")}),yaCounter50134423.reachGoal("DISLIKE")):console.log("already voted")})}),$(function(){var t=1537142400-new Date/1e3<0;t&&$("#bottom-header").html("Музыкальный эфир века (22 сентября)"),$("#bottom").click(function(){var e=$("#bottom-text");$(this).toggleClass("open"),e.toggleClass("open"),$("#bottom-text a").toggleClass("open"),$(this).hasClass("open")&&(bottomClickCounter++,t?e.html("В ближайшие выходные совместно с mipt.live мы организуем большой 12-часовой live-концерт в нашей радиорубке:<br>техничные пассажи, мощные панчи, лиричные баллады  — все самое актуальное из музыкальной жизни Физтеха.<br><br>Стартуем 22 сентября в 15:00. Запишите в календарик, чтобы не забыть!<br><br>Следи за новостями в нашем <a class='open' href='https://vk.com/radiomipt'>сообществе vk.com</a>"):2<bottomClickCounter?e.html("Че ты клацаешь? Новая шутка будет завтра, это же daily jokes!"):$.get("https://raw.githubusercontent.com/fiztehradio/daily-jokes/master/joke.txt",function(t){e.html(t)})),yaCounter50134423.reachGoal("JOKE")})});