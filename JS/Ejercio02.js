// Tipos de Datos en JS
// 1. Undefined  -  (Null)
console.warn("--- Tipo de Dato UNDEFIEND (No Definido)")
let cliente;
console.log(`El cliente es:  ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);
cliente = "Juan Romero"
console.log(`El cliente es:  ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);
cliente = 19227
console.log(`El cliente es:  ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);
//console.log(`El cliente ha realizado ${NumCompras} en este mes.`);
// Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declaradas
// 2. BOOLEAN - Boleanos - TRUE/FALSE   (Falso/Veradero)
console.warn("--- Tipo de Dato : BOOLEAN (Boleano - True/ False)")
let esPremium = "No lo sé";
console.log(`¿Es el cliente Premium? : ${esPremium}`)
console.log(`El tipo de dato de la variable esPrremium es: ${typeof(esPremium)}`);
console.log("Asignando el valor \"true\" a la variable. ")
esPremium="true"
console.log(`El tipo de dato de la variable esPrremium es: ${typeof(esPremium)}`);
console.log("Asignando el valor true a la variable. ")
esPremium=true
console.log(`El tipo de dato de la variable esPrremium es: ${typeof(esPremium)}`);
console.log(`¿Es el cliente Premium? : ${esPremium}`);
console.log("Cambiando el valor de esPremium a false")
esPremium=0;
if(esPremium)
    console.log ("El cliente pago por usar el servicio.");
else 
    console.log ("El cliente recibe los servicios gratuitos");
// 3. NUMBER (Números)
var cantidad;
const costo_producto = 10.50
let  saldo_cuenta = -2500.40
let monto_transaccion ;
console.warn("--- Tipo de Dato - NUMBER (Números, positivos, negativos, decimleas , flotantes)");
console.log(`Tu saldo al día de hoy es de: ${saldo_cuenta},  (Tipo de Dato = ${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta: ${costo_producto}`)
cantidad=8;
console.log(`Has elegido comprar:  ${cantidad} de productos.`)
console.log(`El importe total de la compra es: ${(cantidad*costo_producto)}`)
saldo_cuenta= saldo_cuenta - (cantidad*costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);
// El cliente realiza un abono de 1500
monto_transaccion=1500;
console.log(`Tu abono de : ${monto_transaccion} ha sido recibido, tu nuevo saldo es de: ${(saldo_cuenta+monto_transaccion)}`);
// 4. STRING (Cadena de Caractéres)
const alumno = "Marco A. Ramírez Hernández"
let producto;
console.warn("--- Tipo de Dato - STRING (Cadena de Caractéres)");
console.log(`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof(alumno)}`);
// Inicializamos el valor de la variable producto
producto = "MONITOR 20\" FULL HD"
console.log(`El nombre del PRODUCTO es: ${producto}, que es un tipo de dato ${typeof(producto)}`);
// Manipulando los STRINGS
console.log(`Más adelante podremos transformar el contenido de los STRING usando los métodos y funciones específicas, cómo convertir su valor a mayúsculas: ${alumno} => ${alumno.toUpperCase()}`);
console.log(`O en su defecto a minúsculas: ${producto} => ${producto.toLowerCase()}`);
// 5. BIGINT (Número de Mayor Amplitud)
console.warn("--- Tipo de Dato - BIGINT (Número Ampplio");
const numeroGrande = 1234567890
const numeroGrande2 = 12345678901234567890
let numeroGrande3 = 123456789012345678901234567890
let numeroGrande4 = 123456789012345678901234567891234567890
console.log(`El primer experimento de un numero grande es: ${numeroGrande}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande)}`)
console.log(`El segundo experimento de un numero grande es: ${numeroGrande2}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande2)}`)
console.log(`El tercer experimento de un numero grande es: ${numeroGrande3}, que NO es soportado por NUMBER, perdiendo presición, y su tipo de dato es: ${typeof(numeroGrande3)}`)
console.log(`El cuarto experimento de un numero grande es: ${numeroGrande4}, que NO es soportado por NUMBER, perdiendo presición y su tipo de dato es: ${typeof(numeroGrande4)}`)
numeroGrande3= BigInt("123456789012345678901234567890");
console.log(`El quinto experimento de un numero grande es: ${numeroGrande3}, que ya fué convertido a BIGINT, y su tipo de dato es: ${typeof(numeroGrande3)}`)
numeroGrande4= BigInt("1234567890123456789012345678901234567890");
console.log(`El sexto experimento de un numero grande es: ${numeroGrande4}, que ya fué convertido a BIGINT, y su tipo de dato es: ${typeof(numeroGrande4)}`)
// ¿Se pueden realizar operaciones matemáticas entre un NUMBER y un BIGINT?
const numero = 129;
console.log(`Intentando realizar la suma de :  numero + numeroGrande3, el resultado es: ${BigInt(numero) + numeroGrande3}`)
// 6. SYMBOL (Símbolo)
console.warn("--- Tipo de Dato SYMBOL (Símbolo o Único)")
const numero1 =5;
const numero2= 5.0;
const numero3= "5";
const numero4="5.0"
const numero5=Symbol(5)
const numero6=Symbol(5)
const numero7=Symbol(5.0)
const numero8=Symbol("5")
const numero9=Symbol("5.0")
// Pruebas comparativas
//1
console.log("¿Es  5 = 5.0?")
if(numero1 == numero2)
    console.log("Se comparó numero1 con numero2, determinando que tienen el mismo valor.")
else 
console.log("Se comparó numero1 con numero2, determinando que NO tienen el mismo valor.")
//2
console.log("¿Es  5 = \"5\"?")
if(numero1 == numero3)
    console.log("Se comparó numero1 con numero3, determinando que tienen el mismo valor.")
else 
console.log("Se comparó numero31 con numero3, determinando que NO tienen el mismo valor.")
//3
console.log("¿Es  5 === \"5\"?")
if(numero1 === numero3)  //Estrictamente igual (Equidad)= Mismo valor, mismo tipo de dato
    console.log("Se comparó numero1 con numero3, determinando que tienen el mismo valor.")
else 
console.log("Se comparó numero1 con numero3, determinando que tienen el mismo valor, pero NO el mismo tipo de DATO.")
//4
console.log("¿Es  5 = \"5.0\"?")
if(numero1 == numero4)
    console.log("Se comparó numero1 con numero4, determinando que tienen el mismo valor.")
else 
console.log("Se comparó numero31 con numero4, determinando que NO tienen el mismo valor.")
//5
console.log("¿Es  5 === \"5.0\"?")
if(numero1 === numero4)  //Estrictamente igual (Equidad)= Mismo valor, mismo tipo de dato
    console.log("Se comparó numero1 con numero4, determinando que tienen el mismo valor.")
else 
console.log("Se comparó numero1 con numero4, determinando que tienen el mismo valor, pero NO el mismo tipo de DATO.")
//6
console.log(`¿Es  5 === Symbol(5)?  , antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo: ${typeof(numero1)} y  numero5 del tipo: ${typeof(numero5)}`)
if(numero1 === numero5)  //Estrictamente igual (Equidad)= Mismo valor, mismo tipo de dato
    console.log("Se comparó numero1 con numero5, determinando que tienen el mismo valor.")
else 
console.log("Se comparó numero1 con numero5, determinando que tienen el mismo valor, pero NO el mismo tipo de DATO.")
//7
console.log(`¿Es  5 === Symbol(5.0)?  , antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo: ${typeof(numero1)} y  numero7 del tipo: ${typeof(numero7)}`)
if(numero1 === numero7)  //Estrictamente igual (Equidad)= Mismo valor, mismo tipo de dato
    console.log("Se comparó numero1 con numero7, determinando que tienen el mismo valor.")
else 
console.log("Se comparó numero1 con numero7, determinando que tienen el mismo valor, pero NO el mismo tipo de DATO.")
//8 
console.log(`¿Es  5 === Symbol("5")?  , antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo: ${typeof(numero1)} y  numero7 del tipo: ${typeof(numero8)}`)
if(numero1 == numero8)  //Estrictamente igual (Equidad)= Mismo valor, mismo tipo de dato
    console.log("Se comparó numero1 con numero8, determinando que tienen el mismo valor.")
else 
console.log("Se comparó numero1 con numero8, determinando que tienen el mismo valor, pero NO el mismo tipo de DATO.")
//8 
console.log(`¿Es  5 === Symbol("5.0")?  , antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo: ${typeof(numero1)} y  numero7 del tipo: ${typeof(numero9)}`)
if(numero1 == numero9)  //Estrictamente igual (Equidad)= Mismo valor, mismo tipo de dato
    console.log("Se comparó numero1 con numero9, determinando que tienen el mismo valor.")
else 
console.log("Se comparó numero1 con numero9, determinando que tienen el mismo valor, pero NO el mismo tipo de DATO.")
//9 
console.log(`¿Es  Symbol(5) === Symbol(5)?  , antes de compararlos analizamos que tipo de dato son: siendo numero5 del tipo: ${typeof(numero5)} y  numero6 del tipo: ${typeof(numero6)}`)
if(numero5 === numero6)  //Estrictamente igual (Equidad)= Mismo valor, mismo tipo de dato
    console.log("Se comparó numero5 con numero6, determinando que tienen el mismo valor.")
else 
console.log("Se comparó numero5 con numero6, determinando que tienen el mismo valor, y el mismo tipo de dato, es la condición de Symbol la que lo hace unico en la memoria.")
// 7. NULL
console.warn("--- Tipo de Dato - NULL (Nulo o Vacío)");
// El tipo de dato nulo se asigna cuando el sistema o el usuario saben de la variable pero prefieren dejarlo vacío , bajo su consentimiento, a diferencia de UNDEFIEND que es un valor desconocido asignado por DEFAULT por JS.
let nombreUsuario = null;
let passUsuario = null;
let generoUsuario = null;
let estatusRelacionSentimental= null;
let fecha_ultimoPost;
// Supongamos que estamos programando una Red Social, tipo Facebook, en la que parte de la información se publicará en el perfil del usuario.
// Si el usuario no ha iniciado sesión en el dispositivo móvil o en la aplicacion web, puede explorar contenido de acceso publico. y no existira información para mostrar.
// En la HU (Historia de Usuario), que el usuario desea logearse debera ingresar su numbero telefónico o correo electrónico y una contraseña que deberemos guardar en las variables previamente declaradas. 
// Supongamos que el usuario: Marco R. con correo electrónico marco.ram@gmail.com desea ingresar con su contraseña: pas1234
nombreUsuario = "Egranillomeji@gmail.com";
passUsuario = "password123";
// en este momento de ejecución del sistema no sabemos su género , ni su estatus de relación sentimental.
console.log(`El usuario: ${nombreUsuario} esta intentado logearse con una contraseña de: ${passUsuario}`);
// Lo que prosigue es que el sistema contejara los datos ingresados con la base de datos y en caso de que los datos sean correctos comenzará la sesión en la plataforma actualizando estos valores.
// Dado que Marco es del genero Másculino, y denota que su estatus de relación no ha sido capturado o lo mantiene privado esto generar la actualización de los valores de las variables
generoUsuario="M"
estatusRelacionSentimental=null
console.log(`El usuario: ${nombreUsuario}, se ha logeado exitosamente, al tener acceso a su información de perfil podemos deducir que es del género ${generoUsuario} y que su estatus de relación es: ${estatusRelacionSentimental} y su última publicación la realizó el: ${fecha_ultimoPost}`);
// Comparando NULL vs UNDEFINED
// Si bien UNDEFINED  y NULL tienen el mismo valor , no tienen el mismo tipo de dato
console.log("Comparación de la equidad ente Undefined y  Null:")
console.log(
    (fecha_ultimoPost == estatusRelacionSentimental) ?
    "Ambas variables tienen el mismo valor" :
    "Las variables no tienen el mismo valor"
);
console.log("Comparación de la indentidad ente Undefined y  Null:")
console.log(
    (fecha_ultimoPost === estatusRelacionSentimental) ?
    "Ambas variables tienen el mismo valor y el mismo tipo de dato" :
    "Las variables  tienen el mismo valor, pero no el mismo tipo de dato"
);