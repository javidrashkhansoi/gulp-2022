// ? IMG Task
const img = () => {
	return $.gulp.src($.path.img.src)
		.pipe($.gp.plumber({
			errorHandler: $.gp.notify.onError(error => ({
				title: "IMG",
				message: error.message,
			})),
		}))
		.pipe($.gp.newer($.path.img.dest))
		.pipe($.gp.if($.app.isProd, $.gp.webp()))
		.pipe($.gp.if($.app.isProd, $.gulp.dest($.path.img.dest)))
		.pipe($.gp.if($.app.isProd, $.gulp.src($.path.img.src)))
		.pipe($.gp.if($.app.isProd, $.gp.newer($.path.img.dest)))
		.pipe($.gp.if($.app.isProd, $.gp.imagemin($.app.imagemin)))
		.pipe($.gulp.dest($.path.img.dest))
		.pipe($.gulp.src($.path.img.svg))
		.pipe($.gulp.dest($.path.img.dest));
};

module.exports = img;
