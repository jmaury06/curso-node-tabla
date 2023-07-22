const fs = require('fs')
const colors = require('colors')

const multiplicar = async (base = 5, hasta = 10, listar) => {

	try {
		let salida = ''
		let consola = ''

		for (i = 1; i <= hasta; i++) {
			salida += `${base} x ${i} = ${base * i} \n`
			consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i} \n`
		}

		if (listar) {
			console.log('====================='.green)
			console.log(`Tabla del: `, colors.blue(base))
			console.log('====================='.green)
			console.log(consola)
		}

		fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

		return `tabla del ${base}`
	} catch (err) {
		throw err
	}

}

module.exports = {
	multiplicar
}