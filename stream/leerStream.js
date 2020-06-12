const fs = require('fs');

//let contenido = fs.readFileSync('./logs.log');
//console.log(`Tamaño: ${contenido.length}`);

let stream = fs.createReadStream('./logs.log', 'UTF-8');

let data = '';

//La primera vez que lo detecte el evento data, se ejecuta una funcion
stream.once('data', ()=>{
    console.log('Iniciando el stream');
})

//cuando hay datos esto va a ir fluyendo
stream.on('data', (chunk)=>{
    //console.log(`${chunk.length} |`);
    data += chunk;
});


//Esto se ejecuta cuando se termina el stream de la informacion
stream.on('end', ()=>{
    console.log('Fin del Stream \n');
    console.log(data.length);
});