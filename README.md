# Tap browser console color
Adds color to console.log messages that start with `ok` / `# pass` (green) and `not ok` / `# fail` (red). 

Monkey patches `console.log`. 

## Usage
```bash
npm install tap-browser-console-color --save-dev
```

```js
var log = require('tap-browser-console-color');
log.patch();

// do tape console stuff
// var test = require('tape');
// test('whatever', function (assert){ 
//   assert.equal(1,1);
//   assert.end();
// }
```

Optional

```js
log.reset();
```

![](https://raw.githubusercontent.com/Aratramba/tap-browser-console-color/master/images/screenshot.png)
