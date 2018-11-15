var gulp = require('gulp');
var less = require('gulp-less'); // (преобразуем все файлы less в css)
var autoprefixer = require('gulp-autoprefixer'); // (автоматическое добавление префиксов для разных браузеров)
var concat = require('gulp-concat'); // (все файлы less, данного проекта, сохраняем в один файл style.css)
var sourcemaps = require('gulp-sourcemaps'); // (отслеживание позиции изменения less файла)
var cleancss = require('gulp-clean-css'); // (сжатие css файла)
var browserSync = require('browser-sync');//.create(); // (автоматическое обновление)

gulp.task('less', function() {
  return gulp.src('app/less/**/*.less')
  .pipe(less())
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
  browserSync ({  // Выполняем browser Sync
    server: {  // Определяем параметры сервера
      baseDir: 'app'  // выбрали папку, которая будет сервером; Директория для сервера - app
    },
    // notify: false   убрать уведомления в браузере
  });
});

gulp.task('watch', ['browser-sync', 'less'], function() {  // метод watch для проверки сохраняемости файлов; параметры в [] выполняются до watch
  gulp.watch('app/less/**/*.less', ['less']); // в [] массив тех task'ов, которые будем выполнять
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});
