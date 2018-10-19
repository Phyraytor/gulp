var gulp = require('gulp'),
 	browserSync = require('browser-sync').create(),
    less = require('gulp-less'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
 	plumber = require('gulp-plumber'),
    pug = require('gulp-pug'),
    autoprefixer = require('gulp-autoprefixer');

var PATH = 'cardShop';
//var PATH = 'phyraytor';
//var PATH = 'H5U';
//var PATH = 'ToDo';
//var PATH = 'MailRamil';
//var PATH = 'Maket';
//var PATH = 'SnowBoard';
//var PATH = 'TZ';


gulp.task('default', function()
{
  	console.log('Hello gulp!');
});

gulp.task('server', function()
{
	browserSync.init({
		server: {baseDir: './' + PATH + '/dist'}
	});
	gulp.watch('./' + PATH + '/dist/**/*.html')
	    .on('change', browserSync.reload);
	gulp.watch('./' + PATH + '/less/**/*.less', ['less']);
	gulp.watch('./' + PATH + '/pug/**/*.pug',   ['pug']);
	gulp.watch('./' + PATH + '/pug/**/*.html',   ['pug']);
	gulp.watch('./' + PATH + '/pug/**/*.pug',   ['buy']);
	gulp.watch('./' + PATH + '/pug/**/*.pug',   ['add']);
	gulp.watch('./' + PATH + '/sass/**/*.scss', ['sass']);
	gulp.watch('./' + PATH + '/js/**/*.js', ['js']);
});

gulp.task('pug', function()
{
	return gulp.src('./' + PATH + '/pug/Index.pug')
				.pipe( plumber(
				{
					errorHandler: notify.onError(function(err) 
					{
						return {title: 'Pug', message: err.message}
					})
				})
				)
			   .pipe( pug( {pretty: true} ) )
			   .pipe( gulp.dest('./' + PATH +'/dist') )
			   .pipe( browserSync.stream() );
});


gulp.task('buy', function()
{
	return gulp.src('./' + PATH + '/pug/buy.pug')
				.pipe( plumber(
				{
					errorHandler: notify.onError(function(err) 
					{
						return {title: 'Pug', message: err.message}
					})
				})
				)
			   .pipe( pug( {pretty: true} ) )
			   .pipe( gulp.dest('./' + PATH +'/dist') )
			   .pipe( browserSync.stream() );
});


gulp.task('add', function()
{
	return gulp.src('./' + PATH + '/pug/add.pug')
				.pipe( plumber(
				{
					errorHandler: notify.onError(function(err) 
					{
						return {title: 'Pug', message: err.message}
					})
				})
				)
			   .pipe( pug( {pretty: true} ) )
			   .pipe( gulp.dest('./' + PATH +'/dist') )
			   .pipe( browserSync.stream() );
});

gulp.task('less', function()
{
	gulp.src('./' + PATH + '/less/style.less')
		.pipe( plumber(
		{
			errorHandler: notify.onError(function(err) 
			{
				return {title: 'Styles', message: err.message}
			})
		})
		)
	 	.pipe( less() )
	 	.pipe( autoprefixer(
	 	{
	 		browsers: ['last 2 versions'],
	 		cascade: false
	 	 }))
		.pipe( gulp.dest('./' + PATH + '/dist') )
		.pipe( browserSync.stream() );
});

gulp.task('sass', function()
{
	gulp.src('./' + PATH + '/sass/cstyle.scss')
		.pipe( plumber(
		{
			errorHandler: notify.onError(function(err) 
			{
				return {title: 'Styles', message: err.message}
			})
		}))
	 	.pipe( sass() )
		.pipe( gulp.dest('./' + PATH + '/dist') )
		.pipe( browserSync.stream() );
});

gulp.task('js', function()
{
	return gulp.src('./' + PATH + '/js/script.js')
				.pipe( plumber(
				{
					errorHandler: notify.onError(function(err) 
					{
						return {title: 'JS', message: err.message}
					})
				})
				)
			   .pipe( gulp.dest('./' + PATH + '/dist') )
			   .pipe( browserSync.stream() );
});