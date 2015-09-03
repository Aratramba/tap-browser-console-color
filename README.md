# Tap browser console color
Monkey patches `console.log` and adds color to lines that start with `ok` or `# pass` (green) and `not ok` or `# fail` (red).

## Usage
```js
var log = require('tap-browser-console-color');
log.patch(); // adds colors to your console
``

### optional reset:
```js
log.reset();
```

![](https://raw.githubusercontent.com/Aratramba/tap-browser-console-color/master/images/screenshot.png)
