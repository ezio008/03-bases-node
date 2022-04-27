const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        description: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        description: 'Limite de la tabla de multiplicar'
    })
    .check((args, options) => {
        if (isNaN(args.b)) {
            throw 'La base tiene que ser un numero';
        }
        return true;

    })
    .argv;

module.exports = argv;