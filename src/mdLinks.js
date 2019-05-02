const fs = require('fs');
//const path = require ('path');
  
// Module to read files 
module.exports = (pathFile, options) => {
    return new Promise((resolve, reject)=> {
      // Leer el archivo
      fs.readFileResult(pathFile, function(err, data){
        if (err){
          return reject(err);
        }
        resolve(data.toString());
      });
    });
}; 