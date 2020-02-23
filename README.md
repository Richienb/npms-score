# Npms Score [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/npms-score/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/npms-score)

Get the npms scores of a npm package.

[![NPM Badge](https://nodei.co/npm/npms-score.png)](https://npmjs.com/package/npms-score)

## Install

```sh
npm install npms-score
```

## Usage

```js
const npmsScore = require("npms-score");

(async () => {
	await npmsScore("cross-spawn");
	//=> { quality: 0.9995167144697813, popularity: 0.7509903024146316, maintenance: 0.9998891222511912 }
})()
```

## API

### npmsScore(name)

#### name

Type: `string`

The module name to get the scores for.

## Related

- [npms-api](https://github.com/Richienb/npms-api) - Wrapper for the npms api.
