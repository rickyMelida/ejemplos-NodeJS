var nombre;

process.stdout.write('Escribe tu nombre: ');

process.stdin.on('data', (data)=>{
    nombre = data.toString().trim();
    process.stdout.write(`Hola ${nombre}! \n`);
    process.exit();
})