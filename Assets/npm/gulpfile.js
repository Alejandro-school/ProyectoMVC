'use strict';

var
	gulp = require('gulp'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	uglifyJs = require('gulp-uglify'),
	uglifyCss = require('gulp-csso')
;

function js(done)
{
	gulp
		.src([
			'../shared/js/general.js',
			'../page/about/js/script.js',
			'../page/booking/js/script.js',
			'../page/bookingCompleted/js/script.js',
			'../page/BookingInProcess/js/script.js',
			'../page/contact/js/script.js',
			'../page/cookieUsage/js/script.js',
			'../page/home/js/script.js',
			'../page/hotel/js/script.js',
			'../page/personalDataUsage/js/script.js',
			'../page/room/js/script.js',
			'../page/search/js/script.js',
			'../page/thankForContactingUs/js/script.js',
			'../shared/js/js.cookie.js'

		])
		.pipe(concat('script.js'))
		.pipe(gulp.dest('../../Content/js'))
		.pipe(rename('script.min.js'))
		.pipe(uglifyJs())
		.pipe(gulp.dest('../../Content/js'))
	;

	done();
}

function css(done)
{
	gulp
		.src([
			'../shared/css/general.css',
			'../shared/css/layout.css',
			'../page/hotel/css/style.css',
			'../page/about/css/style.css',
			'../page/booking/css/style.css',
			'../page/bookingCompleted/css/style.css',
			'../page/BookingInprocess/css/style.css',
			'../page/contact/css/style.css',
			'../page/cookieUsage/css/style.css',
			'../page/home/css/style.css',
			'../page/personalDataUsage/css/style.css',
			'../page/room/css/style.css',
			'../page/search/css/style.css',
			'../page/thankForContactingUs/css/style.css'
		])
		.pipe(concat('style.css'))
		.pipe(gulp.dest('../../Content/css'))
		.pipe(rename('style.min.css'))
		.pipe(uglifyCss())
		.pipe(gulp.dest('../../Content/css'))
	;

	done();
}

function img(done)
{
    gulp
        .src([
            '../shared/img/*'
        ])
		.pipe(gulp.dest('../../Content/img/'))
    ;
    
    done();
}

function video(done)
{
    gulp
        .src([
            '../shared/video/*'
        ])
		.pipe(gulp.dest('../../Content/video/'))
    ;
    
    done();
}
function fonts(done)
{
    gulp
        .src([
            '../shared/fonts/*'
        ])
		.pipe(gulp.dest('../../Content/fonts/'))
    ;
    
    done();
}
exports.default = gulp.parallel(css,img,video,fonts,js);
