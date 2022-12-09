const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5,listar,hasta) => {

    try {
        let salida = '';

        for (let index = 1; index <= hasta; index++) {
           //console.info(`${base} x ${index}= ${base * index}`);
            salida += `${base} x ${index}= ${base * index}\n`;
        }
        if (listar===true) {
            console.log(salida.rainbow);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`.green;
    } catch (error) {
        throw error;
    }
    //console.log('tabla-6.txt creada');
}

module.exports = {
    crearArchivo // crearArchivo: crearArchivo, esto es redundante, si la funcion tiene el mismo nombre que la variable a exportar, solo se puede dejar el nombre de la function

}

