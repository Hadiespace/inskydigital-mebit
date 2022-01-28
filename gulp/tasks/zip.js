import del from 'del';
import gulpZip from 'gulp-zip';

export const zip = () => {
	del(`./dist/${app.path.rootFolder}.zip`);

	return app.gulp.src(`${app.path.distFolder}/**/*.*`, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'PROD ZIP',
				message: 'Error: <%= error.message %>',
			}),
		))
		.pipe(gulpZip(`${app.path.rootFolder}.zip`))
		.pipe(app.gulp.dest('./dist'));
};
