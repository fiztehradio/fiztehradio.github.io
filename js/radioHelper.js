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
                        "art": "\/static\/img\/generic_song.jpg"
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
        $.getJSON('http://radio.mipt.ru:8880/api/nowplaying/1', function (row) {
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

    $('[data-fancybox]').fancybox({
        buttons: ['close']
    });
});

var request_dialog = $('#modal-request');

request_dialog.on('show.bs.modal', function (event) {

    if (!request_dialog.data('request_loaded')) {
        var grid = $("#requests-table").bootgrid({
            ajax: true,
            rowSelect: false,
            caseSensitive: false,
            css: {
                icon: 'zmdi icon',
                iconColumns: 'zmdi-view-module',
                iconDown: 'zmdi-sort-amount-desc',
                iconRefresh: 'zmdi-refresh',
                iconUp: 'zmdi-sort-amount-asc'
            },
            url: "http://radio.mipt.ru:8880/api/station/1/requests",
            formatters: {
                "commands": function (column, row) {
                    return '<a class="btn btn-request btn-sm btn-primary" data-url="' + row.request_url + '">Запрос</a>';
                }
            }
        }).on("loaded.rs.jquery.bootgrid", function () {
            /* Executes after data is loaded and rendered */
            grid.find(".btn-request").on("click", function (e) {
                e.preventDefault();
                request_dialog.modal('hide');

                $.ajax({
                    dataType: "json",
                    url: $(this).data('url')
                }).done(function (data) {
                    notify(data, 'success');
                }).fail(function (jqXhr) {
                    notify('Error: ' + jqXhr.responseJSON, 'danger');
                });

                return false;
            });
        });

        request_dialog.data('request_loaded', true);
    }

});