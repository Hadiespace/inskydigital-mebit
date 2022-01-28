export const copy = () => app.gulp.src(app.path.src.assets)
	.pipe(app.gulp.dest(app.path.dist.assets));
