node-weberrors
==============

A simple web errors packge.

## Install

```
npm install weberrors --save
```

## Usage

```javascript
var weberrors = require('weberrors')

throw weberrors.BadRequest("username is incorrect")

throw weberrors.WebError(508, "some weird error")

throw weberrors.NotFound()
```

## License

See LICENSE file.
