const fs = require('fs');

// renombrar síncrono
//fs.renameSync('./prueba.txt', 'config.txt');


//renombrar asíncrono
/*fs.rename('config.txt', 'prueba.txt', (err)=>{
    if(err) {
        throw(err);
    }
    console.log('El archivo fue modificado')
});*/

// mover archivo
/*fs.rename('prueba.txt', './src/prueba.txt', (err)=>{
    if(err) {
        throw(err);
    }
    console.log('El archivo fue movido')
});*/

// eliminar archivo
fs.unlinkSync('./src/prueba.txt');
console.log('Se ha eliminado el archivo');