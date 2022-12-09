const argv = require('yargs').option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe:'Es la base de la tabla de multiplicar'
})
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La Base tiene que ser un número'
        }
        return true;
    })
    .option('l',{
        alias:'listar',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe:'Muestra la tabla en consola'
    })
    .option('h',{
        alias:'hasta',
        type: 'number',
        demandOption: false,
        default: 10,
        describe:'Indica hasta que rango debe llegar la tabla de multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.h)) {
            throw 'La h tiene que ser un número'
        }
        return true;
    })
    .argv;

module.exports = argv;