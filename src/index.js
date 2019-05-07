
const fs = require("fs");
const path = require("path");
const pathFile = process.argv[2];
const mdLinks = require("./mdLinks");
//const readingFileResult = mdLinks(pathFile, null);
const chalk = require('chalk');
const fetch = require('node-fetch');
const {parseLinks, extactData} = require('./functions');
const argument = process.argv[3];

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
// readingFileResult.then(
//   (data) => { // On Success
//     console.log("Found links:");
//     urlify(data);
//   }).catch((err) => {
//     console.error(err);
//   });
  
// //Función que extrae los links y los imprime en arreglo de objetos
// function urlify(data) {
//   const mdLinkRgEx = /\[(.+?)\]\(.+?\)/g;
//   const mdLinkRgEx2 = /\[(.+?)\]\((.+?)\)/;
//   let allLinks = data.match(mdLinkRgEx);
//   let htmlLinks = [];
//   for (let x in allLinks) {
//     const grpdDta = mdLinkRgEx2.exec(allLinks[x]);
//     const grupoData = {
//       href: grpdDta[2],
//       text: grpdDta[1],
//       file: pathFile
//     };
//     htmlLinks.push(grupoData);
//   }
//   console.log(htmlLinks.length);
//   console.log(htmlLinks);
//   return htmlLinks;
// };

 // Válidar Links encontrados.
 
//  const links = (pathFile, options) => {
//   return new Promise((resolve, reject) => {
//     // Leer el archivo
//     fs.readFile(pathFile, function (err, data) {
//       if (err) {
//         return reject(err);
//       }

//       let htmlLinks = urlify(data.toString());
//       let mainMessage = "Links encontrados: " + htmlLinks.length
//       //console.log(mainMessage.yellow);
//       // Válidar Links encontrados.
//       for (let i = 0; i < htmlLinks.length; i++) {

//         request(htmlLinks[i].href, (error, response, body) => {
//           if (error) {
//             htmlLinks[i].message = 'No se encontró la página';
//             htmlLinks[i].pathExist = false;
//             if (options.validate){
//               console.log("     " + htmlLinks[i].href.white + " " + htmlLinks[i].message.red);
//             } else {
//               //console.log("     " + htmlLinks[i].href.white);
//             }
//           }
//           else {

//             const statusCode = response.statusCode;
//             // const contentType = res.headers['content-type'];

//             if (statusCode === 200) {
//               htmlLinks[i].message = 'Página válida ';
//               htmlLinks[i].pathExist = true;
//               if (options.validate){
//                 console.log("     " + htmlLinks[i].href.white + " " + htmlLinks[i].message.green);
//               } else {
//                 //console.log("     " + htmlLinks[i].href.white);
//               }
//             }
//             else {
//               htmlLinks[i].message = 'página inválida';
//             }
//           }
//         });
//       }

//       resolve(htmlLinks);
//     });
//   });
// };

//Validar links

let validate = false;
if(argument && (argument === '--validate' || argument === '-v')){
    validate = true;
}
const resultReadFile  = mdLinks(pathFile, null);

resultReadFile
    .then(
        (data)=> { 
            const linkArray = parseLinks(data); 
            const objArray = linkArray.map(extactData);
            if(!validate) {
                for(let obj of objArray) {
                    console.log(chalk.cyan(obj.link), chalk.yellow(obj.text));
                }
                return;
            }
            for (let obj of objArray) {
                fetch(obj.link)
                .then(response => {
                  if (response.status == 200) {
                    console.log(chalk.green('[✔]'), chalk.white(obj.link), chalk.bgBlue(` ${response.status} ${response.statusText} `), chalk.yellow(obj.text));
                  } else {
                    console.log(chalk.red('[X]'), chalk.white(obj.link), chalk.bgRed(` ${response.status} ${response.statusText} `), chalk.white(obj.text ));
                  }
                })
                .catch((error)=> console.log(chalk.yellow('[-]'), chalk.white(obj.link), chalk.bgRed(` ${error.type} ${error.code} `), chalk.white(obj.text )));
              }           
        }
    ).catch(
        (err)=> { 
            console.error(err);
        }
    );
  
 
  
  
  module.exports = {
    pathInserted,
    pathWorking,
    pathDirectory,
    fileMd,
    // readingFileResult,
    // urlify,
};