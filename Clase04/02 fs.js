
// PERSISTENCIA EN MEMORIA Y EN ARCHIVOS

// Todas las cosas que se crean persisten en la memoria, que se borra automáticamente cuando finaliza el programa.
// Cuando se guardan en archivos, la información persiste.

// Como desarrolladores no nos destacamos por crear cosas desde cero sino por utilizar lo ya creado por otros para dar la mejor solucion posible a un problema especifico

// FileSystem FS => Modulo nativo de Node para manipular los archivos que necesitamos

const fs = require("fs");

// fs.writeFile => asíncrono
// fs.writeFileSync => sincrónico

// Para casi todos los métodos estan ambas opciones. Aunque se recomienda usas los asíncronos para no bloquear el flujo de información

//fs.existSync => verifica en la ruta si existe un archivo o no => True o False

// Cuando debemos bloquear la info => al leer la configuracion inicial 

//escribir un archivo
fs.writeFileSync("archivo.txt","primera linea")
fs.writeFileSync("archivo.txt","segunda linea") // sobreescribe la información

//leer un archivo
const infoArchivo =fs.readFileSync("archivo.txt","utf-8") // se coloca como segundo parametro utf-8 para poder leerlo

console.log(infoArchivo)

// eliminar archivo
fs.unlinkSync("archivo.txt")

// verificar la existencia de un archivo => True o False
console.log(fs.existsSync("archivo.txt")); 