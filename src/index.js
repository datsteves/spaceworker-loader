const fs = require('fs')
const path = require('path')

function SpaceWorkerPlugin(content) {
    const name = path.basename(this.resourcePath).replace('.worker','')
    const spaceworkerJS = fs.readFileSync(__dirname + '/spaceworker.js')
    this.emitFile('spaceworker.js',spaceworkerJS)
    this.emitFile(name, 'importScripts(\'$$(url)\')\n'+content)
    return 'module.exports = new SpaceController(\''+name+'\'); module.exports.default = new SpaceController(\''+name+'\');'
}

module.exports = SpaceWorkerPlugin