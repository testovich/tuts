var gulp = require('gulp'),
	stylus = require('gulp-stylus');

function compileWrap(file){
	gulp.src(file.path)
		.pipe(stylus({compress: false}))
		.pipe(gulp.dest(__dirname+'/public/css/'))
		.on('finish', function() {
			console.log('Хозяин, стили скомпилированы. Проверьте '+file.path+'!')
		});
}

gulp.task('table-compile', function () {
	gulp.watch(__dirname+'/public/css/*.styl', compileWrap);
});

gulp.task('default', ['table-compile']);