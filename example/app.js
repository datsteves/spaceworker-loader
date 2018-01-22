const worker = require("./test.worker.js")

worker.run("sayHelloWorld", "hello", "world")
    .then(res => {
        console.log(res)
    })
