const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// Минификация
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const concatCss = require('gulp-concat-css');

// Отладка
const browserSync = require("browser-sync");
const reload = browserSync.reload;
const plumber = require('gulp-plumber');
const php = require('gulp-connect-php');

const path = {
	src: { // Исходники
		html: 'src/*.html',
		css: 'src/style/**/*.css',
		sass: 'src/style/**/*.scss',
		js: 'src/js/*.js',
		php: 'src/php/*.php',
		img: 'src/img/**/*.*',
		fonts: 'src/fonts/**/*.*'
	},
	build: { // Сборка
		html: 'build/',
		css: 'build/css/',
		js: 'build/js/',
		php: 'build/php/',
		img: 'build/img/',
		fonts: 'src/fonts/',
		all: 'build/**/*.*'
	},
	watch: { // Отслеживание изменений
		html: 'src/*.html',
		scss: 'src/style/*.scss',
		js: 'src/js/*.js',
		php: 'src/php/*.php',
		img: 'src/img/**/*.*'
	},
	clean: './build'
};

gulp.task('build-html', function () {
	gulp.src(path.src.html)
		.pipe(plumber())
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest(path.build.html))
		.pipe(reload({stream: true}));
});

gulp.task('build-sass', function () {
	gulp.src(path.src.sass)
		.pipe(plumber())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(uglifycss())
		.pipe(concatCss("style.css"))	//path.src.build +
		.pipe(gulp.dest(path.build.css))
		.pipe(reload({stream: true}));
});

gulp.task('build-css', function () {
	gulp.src(path.src.css)
		.pipe(plumber())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(uglifycss())
		.pipe(gulp.dest(path.build.css))
		.pipe(reload({stream: true}));
});

gulp.task('build-js', function () {
	gulp.src(path.src.js)
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest(path.build.js))
		.pipe(reload({stream: true}));
});

gulp.task('build-fonts', function () {
	gulp.src(path.src.fonts)
		.pipe(plumber())
		.pipe(gulp.dest(path.build.fonts))
		.pipe(reload({stream: true}));
});

gulp.task('build-php', function () {
	gulp.src(path.src.php)
		.pipe(gulp.dest(path.build.php))
		.pipe(reload({stream: true}));
});

gulp.task('build-img', function () {
	gulp.src(path.src.img)
		.pipe(gulp.dest(path.build.img))
		.pipe(reload({stream: true}));

});

gulp.task('watch', function () {
	gulp.watch([path.watch.html], function (event, cb) {
		gulp.start('build-html');
	});
	gulp.watch([path.watch.scss], function (event, cb) {
		gulp.start('build-sass');
	});
	gulp.watch([path.watch.php], function (event, cb) {
		gulp.start('build-php');
	});
	gulp.watch([path.watch.img], function (event, cb) {
		gulp.start('build-img');
	});
	gulp.watch([path.watch.js], function (event, cb) {
		gulp.start('build-js');
	});
});

gulp.task('php', function () {
	php.server({base: 'build', port: 8010, keepalive: true});
});

gulp.task('webserver', function () {
	browserSync({
		proxy: '127.0.0.1:8010',
		// server: {
		// 	baseDir: "./build"
		// },
		tunnel: true,
		host: 'localhost',
		port: 9001,
		logPrefix: "radio.mipt.ru"
	});
});

gulp.task('build', [
	'build-html',
	'build-sass',
	'build-css',
	'build-js',
	'build-php',
	'build-img',
	'build-fonts'
]);

gulp.task('default', ['build', 'php', 'webserver', 'watch']);