# Tap browser console color
Adds color to lines that start with `ok` / `# pass` (green) and `not ok` / `# fail` (red). 

Monkey patches `console.log`. 

## Usage
```js
var log = require('tap-browser-console-color');
log.patch(); // adds colors to your console
```

Optional

```js
log.reset();
```

![](https://raw.githubusercontent.com/Aratramba/tap-browser-console-color/master/images/screenshot.png)
