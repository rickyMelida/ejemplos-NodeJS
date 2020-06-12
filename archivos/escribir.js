const fs = require('fs');

const archivoDos = 'prueba.txt';

//Validamos si existe un archivo
/*if(fs.existsSync(archivoDos)){
    console.log('El archivo existe');
}else {
    console.log('El archivo NO existe')
}*/


/*fs.access(archivoDos, fs.constants.F_OK, (err)=>{
    if(err) {
        console.log('El archivo no existe');
    }else {
        console.log('El archivo si existe');
    }
});*/


const contenido = 'Este es el nuevo contenido escrito desde NodeJS';

//Forma Síncrona de crear un archivo
//fs.writeFileSync(archivoDos, contenido);
//console.log('Se ha escrito en el archivo');

//Forma asíncrona de crear un archivo
/*fs.writeFile(archivoDos, contenido, (err)=>{
    if(err) throw('Hubo un error al escribir en el archivo');
    console.log('Se ha escrito en el archivo');
});*/


const textoAdicional = ' aqui va otra linea de codigo';

fs.appendFile(archivoDos, textoAdicional, (err)=>{
    if(err) throw('No se pudo adjuntar mas texto');

    console.log('SE adjuntado mas informacion..');
});

