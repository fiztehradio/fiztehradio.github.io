var nowPlaying;

function iterateTimer() {
    var np_elapsed = nowPlaying.np.now_playing.elapsed;
    var np_total = nowPlaying.np.now_playing.duration;

    if (np_elapsed < np_total) {
        nowPlaying.np.now_playing.elapsed = np_elapsed + 1;
    }
}

function formatTime(time) {
    var sec_num = parseInt(time, 10);

    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return (hours !== "00" ? hours + ':' : "") + minutes + ':' + seconds;
}

$(function () {
    nowPlaying = new Vue({
        el: '#station-nowplaying',
        data: {
            "np": {
                "now_playing": {
                    "song": {
                        "title": "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0435\u0441\u043d\u0438",
                        "artist": "\u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c",
                        "art": "" // TODO: put here the link to FR logo 
                    },
                    "is_request": false,
                    "elapsed": 0,
                    "duration": 0
                }
            }
        },
        computed: {
            "time_display": function () {
                var time_played = this.np.now_playing.elapsed;
                var time_total = this.np.now_playing.duration;

                if (!time_total) {
                    return null;
                }

                if (time_played > time_total) {
                    time_played = time_total;
                }

                return formatTime(time_played) + ' / ' + formatTime(time_total);
            }
        }
    });

    setInterval(iterateTimer, 1000);
});

var songHistory;

$(function () {
    songHistory = new Vue({
        el: '#station-history',
        data: {
            history: [{
                song: {
                    title: 'Название песни',
                    artist: 'Исполнитель'
                }
            }]
        }
    });

    function loadNowPlaying() {
        $.getJSON('https://phystech.tv/api/nowplaying/1', function (row) {
            nowPlaying.np = row;
            songHistory.history = row.song_history;

            if ('mediaSession' in navigator) {
                navigator.mediaSession.metadata = new MediaMetadata({
                    title: row.now_playing.song.title,
                    artist: row.now_playing.song.artist
                });
            }

            setTimeout(loadNowPlaying, 15000);
        });
    }
    loadNowPlaying();
});
