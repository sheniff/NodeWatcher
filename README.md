NodeWatcher
===========

Simple, easy-to-setup grunt project with livereload

## Installation

Install node packages
```
$> npm install
```

Set configuration up in `Gruntfile.js`
```javascript
// Gruntfile.js
var folders2watch = [
      // '<%= config.app %>/{,*/}*.html',
      // '.tmp/styles/{,*/}*.css',
      // '<%= config.app %>/images/{,*/}*'
      './index.html'
    ],
    // Where index.html should be so that when you get to
    // localhost:9000, it will load a page.
    baseRoute = ['.'];
```

Run Grunt!
```
$> grunt
```

:D
