const eventEmitter = require('events').EventEmitter;
const util = require('util');

var Persona = function(nombre){
    this.nombre = nombre;
}

//Heredamos las clases de eventEmitter en la clase Persona
util.inherits(Persona, eventEmitter);

let persona = new Persona('Bob');

persona.on('hablar', (mensaje)=>{
    console.log(`${persona.nombre} : ${mensaje}`);
});

persona.emit('hablar', 'Hoy es un gran dia');

