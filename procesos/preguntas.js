let preguntas = [
    'Cuál es tu nombre?\n',
    'Cuantos años tienes?\n',
    'Lenguaje de programación favorito?\n'
];

var respuestas = [];

let pregunta = (i)=>{
    process.stdout.write(preguntas[i]);
}

process.stdin.on('data', (data)=>{
    respuestas.push(data.toString().trim());

    if(respuestas.length < preguntas.length) {
        pregunta(respuestas.length);
    }else {
        process.exit()
    }
});


pregunta(0);