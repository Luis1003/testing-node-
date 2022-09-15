const {createFile} = require('./helpers/multiply');
const argv = require('./config/yargs');

const base = argv.base;
const limit = argv.limit;
const file = argv.file;

console.clear();

createFile(base, limit, file)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(erro => console.log(erro));