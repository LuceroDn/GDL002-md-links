const fs = require("fs");
const path = require("path");


module.exports = {

//Funcion para verificar si el campo está vacío o lleno
  pathInserted: function (pathFile){
if(pathFile == undefined){
  console.log("false");
  return false
}
else{
  return true
}
},

// Función para saber si la ruta existe o no 

pathWorking: function(pathFile){ 
if(fs.existsSync(pathFile)){
  console.log("true");
  return true
}else{
  console.log("false");
  return false
}
},

//Funcion para saber si la ruta es absoluta
  /*pathIsAbsolute : function (pathfile){
    if(path.isAbsolute(pathfile)){
      return true;
    }
    else{
      return false
    }
  }*/

//Función para verificar si la ruta es un directorio
pathDirectory: function(pathFile){
  if(fs.statSync(pathFile).isDirectory()){
    return true
  } else {
    return false
  }
},

//Funcion que checa si es un .md
pathMd: function(pathFile){
if(path.extname(pathFile) === ".md"){
  return true
} else {
  return false
} 
},

readingFile: function(pathFile){
let archivo = fs.readFileSync(pathFile, 'utf-8');
console.log(archivo);
  return true;
},

//Función para extraer links


};
