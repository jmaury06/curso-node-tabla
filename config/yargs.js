const argv = require('yargs')
.option('b', {
	alias: 'base',
	type: 'number',
	demandOption: true,
	describe: 'es la base de la tabla de multiplicar'
})
.option('h', {
	alias: 'hasta',
	type: 'number',
	default: 10,
	describe: 'hasta donde quieres la tabla'
})
.option('l', {
	alias: 'listar',
	type: 'boolean',
	demandOption: true,
	default: false,
	describe: 'muestra la tabla en consola'
})
.check((argv, option) => {
	if( isNaN(argv.b)){
		throw 'la base tiene que ser un número'
	}
	return true
})
.argv

module.exports = argv;