# Bring your own TypeScript
[![Downloads](http://img.shields.io/npm/dm/byots.svg)](https://npmjs.org/package/byots)
[![BuildStatus](https://travis-ci.org/basarat/byots.svg)](https://travis-ci.org/basarat/byots)

**Use the latest** [**TypeScript**](https://github.com/Microsoft/TypeScript), **with complete access to the compiler API** 🌹

[![NPM](https://nodei.co/npm-dl/byots.png)](https://nodei.co/npm/byots/)


**Still Just TypeScript**

* `byots` will use whatever TypeScript version you install *in your application*. So you are actually using whatever TypeScript you bring in (recommend `npm install typescript@next`).

**But with the following advantage**

With a liberal definition file. We expose internal APIs.

> The definitions are updated daily automatically and our version numbers match the TypeScript nightly version numbers.

## Install
In your package.json

```sh
npm install byots@latest --save --save-exact
```

Each release is named after the day it was built and the git commit hash in Microsoft/TypeScript/master that it was built from. We recommend adding `save-exact` so you know exactly what you tested with.

## Usage

### Require
Use `import * as ts from 'byots'` and you get what `import * as ts from 'typescript'` would give you.

# About
Note that this is a personal endeavor, not officially by Microsoft.
