
const fs = require("fs");
const path = require("path");
const pathFile = process.argv[2];
const linksMd = require("./mdLinks");
const readingFileResult = linksMd(pathFile, null);



//Funcion para verificar si el campo está vacío o lleno
function pathInserted(pathFile) {
  if (pathFile == undefined) {
    console.log("You didn't enter a path");
    return false
  }
  else {
    console.log("You entered a path")
    return true
  }
};

//Función para saber si la ruta existe o no 
function pathWorking(pathFile) {
  if (fs.existsSync(pathFile)) {
    console.log("true");
    return true
  } else {
    console.log("false");
    return false
  }
};

//Funcion para saber si la ruta es absoluta
//pathmAbsolute : function (pathfile){
  //   if(path.isAbsolute(pathfile)){
    //     return true;
    //   }
    //   else{
      //     return false
      //   }
      // }
      
      //Función para verificar si la ruta es un directorio
      function pathDirectory(pathFile) {
        if (fs.statSync(pathFile).isDirectory()) {
          return true
        } else {
          return false
        }
      };
      
      //Funcion que valida si es un .md
      function fileMd(pathFile) {
        if (path.extname(pathFile) === ".md") {
          return true
        } else {
          return false
        }
      };

   

//funcion asíncrona para leer el archivo  
// function readingFile(pathFile, options) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(pathFile, function (err, data) {
//       if (err) {
//         return reject(err);
//       }
//       resolve(data.toString());
//     });
//   });
// };

// Resultado despues de leer el archivo
readingFileResult.then(
  (data) => { // On Success
    console.log("Found links:");
    urlify(data);
  },
  (err) => { // On Error
    console.error(err);
  }
  );
  
//Función que extrae los links y los imprime en arreglo de objetos
function urlify(data) {
  const mdLinkRgEx = /\[(.+?)\]\(.+?\)/g;
  const mdLinkRgEx2 = /\[(.+?)\]\((.+?)\)/;
  let allLinks = data.match(mdLinkRgEx);
  let htmlLinks = [];
  for (var x in allLinks) {
    var grpdDta = mdLinkRgEx2.exec(allLinks[x]);
    var grupoData = {
      href: grpdDta[2],
      text: grpdDta[1],
      file: pathFile
    };
    htmlLinks.push(grupoData);
  }
  console.log(htmlLinks.length);
  console.log(htmlLinks);
  return (htmlLinks);
};




module.exports = {
  pathInserted,
  pathWorking,
  pathDirectory,
  fileMd,
  readingFileResult,
  urlify,
};