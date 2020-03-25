const fs = require('fs-extra')
const path = require('path')


const srcDir = './src'
const isSourceFile = (f) => /\.txt$/.test(f) && fs.statSync(f).isFile()

const escape = function (str) {
    return str.replace(/\'/g, "\\'")
}

const convert = (f, wstrm) => {
    return fs.readFileSync(f, { encoding: 'utf8' })
        .split(/\r\n|\r|\n/)
        .filter(line => line !== '')
        .forEach(line => {
            const items = line.split(/\t/, 2)
            wstrm.write(`  ['${escape(items[0])}', '${escape(items[1])}'],\n`)
        })
}

fs.readdir(srcDir, (err, files) => {
    if (err) throw err;

    const wstrm = fs.createWriteStream('./src/dict.ts', {
        encoding: 'utf8', flags: 'w'
    })

    try {
        wstrm.write('export const dict: string[][] = [\n')

        files.map(f => path.join(srcDir, f))
            .filter(f => isSourceFile(f))
            .forEach(f => convert(f, wstrm))

        wstrm.write(']\n')
    } finally {
        wstrm.close()
    }
})
