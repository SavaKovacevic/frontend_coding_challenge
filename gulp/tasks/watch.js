var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function(){

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	watch('./app/index.html', function(){
		browserSync.reload();
	});

	watch('./app/map.html', function(){
		browserSync.reload();
	});

	watch('./app/kurs-nemackog.html', function(){
		browserSync.reload();
	});

	watch('./app/kurs-engleskog.html', function(){
		browserSync.reload();
	});

	watch('./app/upisi-kurs.html', function(){
		browserSync.reload();
	});

	watch('./app/kursevi.html', function(){
		browserSync.reload();
	});

	watch('./app/kursevi-za-osnovce.html', function(){
		browserSync.reload();
	});

	watch('./app/kursevi-za-tinejdzere.html', function(){
		browserSync.reload();
	});

	watch('./app/kursevi-za-odrasle.html', function(){
		browserSync.reload();
	});

	watch('./app/medjunarodni-ispiti.html', function(){
		browserSync.reload();
	});

	watch('./app/kontakt.html', function(){
		browserSync.reload();
	});

	watch('./app/zasto-tower.html', function(){
		browserSync.reload();
	});

	watch('./app/prevodilacke-usluge.html', function(){
		browserSync.reload();
	});

	watch('./app/test.html', function(){
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('cssInject');
	});

	watch('./app/assets/scripts/**/*.js', function() {
		gulp.start('scriptsRefresh');
	});
});

gulp.task('cssInject', ['styles'], function (){
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
	browserSync.reload();
});