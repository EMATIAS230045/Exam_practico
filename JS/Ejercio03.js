// string o cadenas de texto
const alumno = "Erick Matias Granillo"
let producto1 = 'Monitor 20 pulgadas'
//const numero = "30"
//const numero2 = 30
console.warn("--- Tipo de dato - String (cadena o de texto)")
console.log (`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof{alumno}} `);
console.log (`El nombre del Producto es: ${producto1}, que es un tipo de dato ${typeof{producto1}} `);
console.log (`Mas adelante podremos transformar el contenido de los strings usando funciones especificas para convertirlos en mayusculas ${alumno} => ${alumno.toUpperCase()} `);
//console.log(typeof numero)
//console.log(typeof numero2)
//BigInit
console.warn("--- Tipo de dato - BigInit (Numeros Grandes)")
const NumeroGrande = BigInt(1234567890)
const NumeroGrande2 = BigInt(12345678901234567890)
const NumeroGrande3 = BigInt(12345678901234567890123456789)
const NumeroGrande4 = BigInt(123456789012345678901234567891234567890)
//const numerogrande = BigInt(918298193891887139831091038173813)
//console.log(typeof numerogrande)
// const numero = 10
// const numero2 = 20
//console.log( numero + Number(numerogrande))
// const numero = "30"
// const numero2 = 30
// console.log(typeof String(numero2))
// console.log(typeof Number(numero))
//symbol
console.warn("--- Tipo de dato - Symbol ")
// const primerSymbol = Symbol(30)
// const segundoSymbol = Symbol(30)
// console.log( primerSymbol == segundoSymbol )
// console.log(primerSymbol.valueOf() )
// console.log(segundoSymbol.valueOf() )
//null
console.warn("--- Tipo de dato - Null (Nulo)")
// const descuento = null
// console.log(typeof descuento)
// Objetos
// const nombre = "Tablet"
// const precio = 300
// const disponible = true
//asi se declara un objeto
const producto = {
    nombre: "Tablet",
    precio: 300,
disponible: true
}
console.log(producto)
console.log(producto)
console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)
// Destructuring
const { nombre, precio, disponible } = producto
console.log(nombre)
console.log(precio)
console.log(disponible)
//object literal Enhacement
const autenticado = true
const usuario = "Juan"
const NuevoObjeto = {
autenticado,
usuario
}
//Para mostrar objetos como tablas
console.table(NuevoObjeto)