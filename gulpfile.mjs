import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import rename from 'gulp-rename';
import htmlmin from 'gulp-htmlmin';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

// Пути к файлам
const paths = {
   html: {
      src: 'src/*.html',
      dest: 'dist/',
   },
   styles: {
      src: 'src/css/output.css',
      dest: 'dist/css',
   },
   scripts: {
      src: 'src/js/**/*.js',
      dest: 'dist/js',
   },
   images: {
      src: 'src/assets/img/**/*',
      dest: 'dist/assets/img',
   },
   favicon: {
      src: 'src/assets/favicon/**/*',
      dest: 'dist/assets/favicon',
   },
};

// Обработка ошибок
function handleError(err) {
   notify.onError({
      title: 'Gulp error in ' + err.plugin,
      message: err.toString(),
   })(err);
   this.emit('end');
}

// Компиляция и минификация стилей
function styles() {
   return gulp
      .src(paths.styles.src)
      .pipe(plumber({ errorHandler: handleError }))
      .pipe(autoprefixer())
      .pipe(cleanCSS({ compatibility: 'ie8' }))
      .pipe(rename({ suffix: '.min', prefix: '' }))
      .pipe(gulp.dest(paths.styles.dest));
}

// Минификация HTML
function html() {
   return gulp
      .src(paths.html.src)
      .pipe(plumber({ errorHandler: handleError }))
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest(paths.html.dest));
}

// Обработка и копирование скриптов
function scripts() {
   return gulp
      .src(paths.scripts.src)
      .pipe(plumber({ errorHandler: handleError }))
      .pipe(gulp.dest(paths.scripts.dest));
}

// Копирование изображений
function images() {
   return gulp
      .src(paths.images.src)
      .pipe(plumber({ errorHandler: handleError }))
      .pipe(gulp.dest(paths.images.dest));
}

// Копирование favicon
function favicon() {
   return gulp
      .src(paths.favicon.src)
      .pipe(plumber({ errorHandler: handleError }))
      .pipe(gulp.dest(paths.favicon.dest));
}

// Задачи
gulp.task('styles', styles);
gulp.task('html', html);
gulp.task('scripts', scripts);
gulp.task('images', images);
gulp.task('favicon', favicon);

// Задача по умолчанию
gulp.task('default', gulp.series(gulp.parallel('html', 'styles', 'scripts', 'images', 'favicon')));
