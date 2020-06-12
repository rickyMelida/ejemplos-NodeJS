const fs = require('fs');

//creamos una carpeta
//fs.mkdirSync('./img');

//creamos una carpeta de forma asíncrona
/*fs.mkdir('./css', (err)=>{
    if(err) throw('No se pudo crear la carpeta');

    console.log('Carpeta creada');
});*/


//Validamos si existe una carpeta para crearla
if(fs.existsSync('css')) {
    console.log('La carpeta ya existe');
}else {
    fs.mkdir('./css', (err)=>{
        console.log('Se ha creado la carpeta');
    })
}
