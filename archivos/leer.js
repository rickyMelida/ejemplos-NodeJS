const fs = require('fs');

//Esto nos devuelve todos los archivos que tenemos en el directorio actual
//Esto lo hace de forma sincrona, es decir de forma secuencial
//var files = fs.readdirSync('./');


//esto lo hacemos de forma asíncrona
fs.readdir('./', (err, files)=>{
    if(err) {
        throw err;
    }
    //console.log(files);

    //Esto lee un archivo y lo codificamos para que no nos salga en hexadecimal
    //var archivo = fs.readFileSync('./archivo.txt', 'UTF-8');

    fs.readFile('./archivo.txt','UTF-8', (err, data) => {
        console.log(data);
    });

    console.log('Contenido del archivo...');

});