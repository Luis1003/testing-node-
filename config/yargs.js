const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        default: 1,
        describe: 'Base to multiply'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Limit to multiply'
    })
    .option('f', {
        alias: 'file',
        type: 'boolean',
        default: false,
        describe: 'Generate file'
    })
    .check((argv, options) => {
        if (isNaN(argv.b))
            throw 'The base needs to be a number!';
        else if (isNaN(argv.l))
            throw 'The limit needs to be a number!';
        return true;
    })
    .argv;

module.exports = argv;