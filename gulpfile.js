var gulp = require('gulp'),
  svgSprite = require('gulp-svg-sprite');

config = {
  mode: {
    css: {
      // Activate the «css» mode
      render: {
        css: true, // Activate CSS output (with default options)
      },
    },
  },
};

gulp.task('svg', function () {
  return gulp
    .src('**/*.svg', { cwd: '/svgs' })
    .pipe(svgSprite(config))
    .pipe(gulp.dest('out'));
});

gulp.task('default', 'svg');
