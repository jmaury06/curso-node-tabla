const {multiplicar} = require('./helper/multiplicar')
require('colors')
const argv = require('./config/yargs')

console.clear();

multiplicar(argv.b, argv.h, argv.l).then(nameFile => 
	console.log(nameFile.rainbow, ' creado')
).catch(err => console.log(err, ' copito'))
