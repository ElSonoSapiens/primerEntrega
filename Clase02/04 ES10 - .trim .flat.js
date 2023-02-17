// --- .trim() -  recorta los espacio inicial y final en un String

const saludo = "     hola todo el mundo         "

console.log(saludo)
console.log(saludo.trim())


//--- .flat() - desarma arrays dentros de un array

const array =[1,2,3,4,[[5,6,7,8],[9,1,2,[3,4,5,6,7]]]]

console.log(array.flat())
console.log(array.flat(2))
console.log(array.flat(3))

//--- dynamic import

// Lo vemos mas adelante