const { series, parallel, src, dest, lastRun, watch } = require('gulp'),
  fileinclude = require('gulp-file-include'),
  uglify = require('gulp-uglify'),
  babel = require('gulp-babel'),
  sass = require('gulp-sass'),
  gcmq = require('gulp-group-css-media-queries'),
  cleancss = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  autoprefixer = require('gulp-autoprefixer'),
  notify = require('gulp-notify'),
  del = require('del'),
  browserSync = require('browser-sync'),
  svgSprite = require('gulp-svg-sprite'),
  svgmin = require('gulp-svgmin'),
  cheerio = require('gulp-cheerio'),
  replace = require('gulp-replace');

///////////////////////////////////////////////////////// path
const path = {
  dist: {
    html: 'dist/',
    font: 'dist/design/font/',
    img: 'dist/design/images/',
    style: 'dist/design/css/',
    script: 'dist/design/js/',
  },

  src: {
    html: [
      '_src/html/*.html'
    ],
    htmlWatch: '_src/html/**/*.html',
    font: [
      '_src/design/font/**/*'
    ],
    img: [
      '_src/design/images/**/*.{png,jpg,jpeg,gif,svg}',
      '!_src/design/images/sprite/**'
    ],
    sprite: '_src/design/images/sprite/*.svg',
    styleLib: '_src/design/style/libs.scss',
    style: '_src/design/style/main.scss',
    styleWatch: [
      '_src/design/style/**/*',
      '!_src/design/style/libs.scss'
    ],
    scriptJquery: '_src/design/script/lib/jquery-3.5.1.min.js',
    scriptLib: '_src/design/script/libs.js',
    script: '_src/design/script/main.js',
    scriptWatch: ['_src/design/script/**/*', '!_src/design/script/libs.js']
  },
};

///////////////////////////////////////////////////////// server
const server = () => {
  browserSync({
    server: 'dist',
    notify: true,
    // open: false,
    // online: true, // Work Offline Without Internet Connection
    // tunnel: true
  });
}

///////////////////////////////////////////////////////// clean global
const clean = () => {
  return del(path.dist.html);
}

///////////////////////////////////////////////////////// html
const html = () => {
  return src(path.src.html)
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest(path.dist.html))
    .pipe(browserSync.stream());
}

///////////////////////////////////////////////////////// fonts
const font = () => {
  return src(path.src.font)
    .pipe(dest(path.dist.font));
}

///////////////////////////////////////////////////////// img
const img = () => {
  return src(path.src.img, { since: lastRun(img) })
    .pipe(dest(path.dist.img))
    .pipe(browserSync.stream());
}

///////////////////////////////////////////////////////// sprite
const sprite = () => {
  return src(path.src.sprite)
  // minify svg
  .pipe(svgmin({
    js2svg: {
      pretty: true
    }
  }))
  // remove all fill, style and stroke declarations in out shapes
  .pipe(cheerio({
    run: function ($) {
      $('[fill]').removeAttr('fill');
      $('[stroke]').removeAttr('stroke');
      $('[style]').removeAttr('style');
    },
    parserOptions: {
      xmlMode: true
    }
  }))
  // cheerio plugin create unnecessary string '&gt;', so replace it.
  .pipe(replace('&gt;', '>'))
  // build svg sprite
  .pipe(svgSprite({
    mode: {
      symbol: {
        sprite: "sprite.svg",
      }
    }
  }))
  .pipe(dest(path.dist.img))
  .pipe(browserSync.stream());
}

///////////////////////////////////////////////////////// css
const cssLib = () => {
  return src(path.src.styleLib)
  .pipe(sass())
  .pipe(cleancss())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(dest(path.dist.style))
  .pipe(browserSync.stream());
}

const css = () => {
  return src(path.src.style, { sourcemaps: true })
  .pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
  .pipe(gcmq())
  .pipe(autoprefixer(['last 15 versions']))
  .pipe(rename({ suffix: '.min' }))
  .pipe(dest(path.dist.style, { sourcemaps: '.' }))
  .pipe(browserSync.stream());
}

const cssBuild = () => {
  return src(path.src.style)
  .pipe(sass())
  .pipe(gcmq())
  .pipe(autoprefixer(['last 15 versions']))
  .pipe(cleancss())
  .pipe(rename({ suffix: '.min' }))
  .pipe(dest(path.dist.style));
}

///////////////////////////////////////////////////////// js
const jsJquery = () => {
  return src(path.src.scriptJquery)
  .pipe(dest(path.dist.script));
}

const jsLib = () => {
  return src(path.src.scriptLib)
  .pipe(fileinclude({
    basepath: '@root'
  }))
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(dest(path.dist.script))
  .pipe(browserSync.stream());
}

const js = () => {
  return src(path.src.script, { sourcemaps: true })
  .pipe(fileinclude())
  .pipe(babel({ presets: ['@babel/preset-env'] }))
  .pipe(rename({suffix: '.min'}))
  .pipe(dest(path.dist.script), { sourcemaps: true })
  .pipe(browserSync.stream());
}

const jsBuild = () => {
  return src(path.src.script)
  .pipe(fileinclude())
  .pipe(babel({ presets: ['@babel/env'] }))
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(dest(path.dist.script));
}

///////////////////////////////////////////////////////// watcher
const watcher = () => {
  watch(path.src.htmlWatch, html);
  watch(path.src.font, font);
  watch(path.src.img, img);
  watch(path.src.sprite, sprite);
  watch(path.src.styleLib, cssLib);
  watch(path.src.styleWatch, css);
  watch(path.src.scriptWatch, js);
  watch(path.src.scriptLib, jsLib);
}

///////////////////////////////////////////////////////// task
exports.default = series(
  clean,
  parallel(
    html,
    font,
    img,
    sprite,
    cssLib,
    css,
    jsJquery,
    jsLib,
    js
  ),
  parallel(
    watcher,
    server
  )
);

exports.build = series(
  clean,
  parallel(
    html,
    font,
    img,
    sprite,
    cssLib,
    cssBuild,
    jsJquery,
    jsLib,
    jsBuild
  )
);
