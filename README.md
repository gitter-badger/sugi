![Sugi logo](assets/logo_small.png)
<div style="clear:both;"></div>
[![GitHub version](https://badge.fury.io/gh/tokyoincode%2Fsugi.svg)](https://badge.fury.io/gh/tokyoincode%2Fsugi)
[![npm version](https://badge.fury.io/js/sugi.svg)](https://badge.fury.io/js/sugi)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://www.npmjs.com/package/sugi)

Save trees by writing your documentation in Markdown and then transforming it into HTML!

### What is a "sugi"?

>It is endemic to Japan, where it is known as sugi (Japanese: 杉). The tree is called Japanese cedar[3] or Japanese red-cedar[4] in English.

[-Wikipedia](https://en.wikipedia.org/wiki/Cryptomeria)

**Note:** Sugi is currently in alpha, so many features have not been implemented yet. This
document serves as a roadmap. Feel free to request features by submitting an issue.
Thank you for your understanding.

## Installation
To install Sugi, all you need to do is run:

```
npm install sugi -g
```

## Usage
Find the markdown file that you would like to transform, for example:
```
sugi documentation.md
```
Your new file will be called `documentation.html`.

However, if you specify the name in the command like so:
```
sugi documentation.md index.html
```
Then you will get `index.html`

## Options
```
sugi --version
```
Outputs the currently installed version.

## Update
To update sugi:
```
npm update sugi -g
```

## Issues
If you find any bugs or wish to contribute, feel free to submit an issue or a pull
request.

## Contribution
Coming soon.

## License:
The MIT License (MIT)

Copyright (c) 2016 Kevin O'Neil

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
