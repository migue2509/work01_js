let num01 = 240;
let num02 = 170;
let num03 = 90;
let num04 = 50;


let suma = num01 + num02;
let multiplicacion = num03 * num04;
let division = num03/num02;
let resta = num04- num01;

console.log("La suma del numero " + num01 + " y el numero " + num02 + " es:", suma )

let respuesta = num01 >= 90 && num02 < num01 ? num02 = 00: num02 = 01

console.log(respuesta);

let nombre = "Miguel"
let apellido = "Ospina"
let edad = 18;
let entrada;

let nomCompleto = "El nombre completo es " + nombre +" " + apellido + " y su edad es " + edad;
console.log(nomCompleto)

let informacion = edad >= 18 ? nombre == "Miguel" ? entrada = "Puedes entrar": entrada = "No puedes entrar":edad -=8
console.log(informacion)

const licenciaCond = false;
let multa;
let apagado;


let comparendo =  licenciaCond === true ? multa = "No tiene multa": multa = "Si tiene multa" 


console.log(comparendo)


const user = "mg5020";
const gmail = "mg@gmail.com"
const contraseña = 123;
const ciudad = "Medellin";
let resultado;


console.log(` Tu usuario es ${ user} y tu correo es ${ gmail}, la contraseña de tu cuenta es ${contraseña} y vives en la ciudad de ${ciudad} `)

//cambio de contraseña
console.log(gmail === "mg@gmail.com" ? contraseña === 123 ? resultado = "Puedes cambiar tu contraseña": resultado = "No cumples con los requerimientos de informacion" : resultado = "No es un gmail valido")