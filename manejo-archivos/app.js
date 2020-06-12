const express = require('express');
const fileUpload = require('express-fileupload');
const load = require('audio-loader');
const fs = require('fs');


const app = express();

app.use(fileUpload());

app.post('/upload', (req, res)=>{
  //Recibimos los datos
  let archivo = req.files.archivo;
  let nombreCancion = req.body.nombre;
  let artista = req.body.artista;

  //Vemos si existe la carpeta la carpeta del artista del audio a guardar
  if(fs.existsSync(artista)){
    console.log('La carpeta musicas ya existe');
  }else {
    fs.mkdir(`./${artista}`, err =>{
      console.log('Se creo la carpeta Musicas');
    })
  }

  //console.log(req.files);
  archivo.mv(`./${artista}/${nombreCancion}.mp3`, err=>{
    if(err) {
      console.log('Hubo un error al mover el archivo');
      return res.status(500).send({ message : err });
    }

    return res.status(200).send({ message: 'Archivo Subido' })
  })
})

app.listen(3000, ()=>{
  console.log('Corriendo');
})
