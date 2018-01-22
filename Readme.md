# Spaceworker.js Webpack-loader

This is the Webpack loader for my simple libary to make it easier to use WebWorker called [Spaceworker.js](https://github.com/datsteves/spaceworker.js)

## Install

```
npm install --save-dev spaceworker-loader
OR
yarn add --dev spaceworker-loader
```

## Usage

```javascript
// app.js
const worker = require("./iss.worker.js")

worker.run("sayHelloWorld", "hello", "world")
    .then(res => {
        console.log(res) // hello world :)
    })
```

```javascript
// iss.worker.js
class ISS {
    sayHelloWorld(hello, world) {
        return hello + " " + world + " :)"
    }
}

SpaceWorker.provide(ISS, self)
```

```javascript
// webpack.config.js
const path = require('path')
const config = {
    entry: "./app.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.worker\.js$/, use: { loader: 'spaceworker-loader' } }
        ]
    }
}

module.exports = config
```