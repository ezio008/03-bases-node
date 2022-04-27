const fs = require('fs');
require('colors');

const crearArchivo = async (base, list, limit) => {

    let salida = '';
    let consola = '';
    
    for (let index = 1; index <= limit; index++) {
        salida += `${base} x ${index} = ${(base * index)}\n`;
        consola += `${base} ${'x'.white} ${index.toString().yellow} = ${(base * index).toString().cyan}\n`.green;
    }
    
    if (list) { 
        console.log('================'.rainbow);
        console.log('  Tabla del:'.rainbow, base.toString().brightCyan);
        console.log('================'.rainbow);
        console.log(consola); 
    }

    fs.writeFileSync(`./out/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`.bgWhite.cyan;
}

module.exports = {
    crearArchivo
}