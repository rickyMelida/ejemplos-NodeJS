var readline = require('readline');
const util = require('util');

var rl = readline.createInterface(process.stdin, process.stdout);

var persona = {
    nombre: '',
    comentario: []
};

rl.question('¿Cuál es tu nombre?: ', (respuesta)=>{
    persona.nombre = respuesta;
    rl.setPrompt('Dime un comentario: ');
    rl.prompt();
})

//Esto detecta cuando se introduce una linea en consola
rl.on('line', (input)=>{
    if(input.trim() === 'exit') {
        //El atributo %j da referencia a una variable de tipo json
        var mensaje = util.format("Te llamas %s y esto me dijiste %j", persona.nombre, persona.comentario);
        console.log(mensaje);
        process.exit();
    }
    persona.comentario.push(input.trim());

    rl.setPrompt('Dime un comentario: ');
    rl.prompt();
})