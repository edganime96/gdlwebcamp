//DOM 

var total, numero1, numero2;

function totalPagar(numero1, numero2){
    total = numero1 * numero2;
    return total;
}

var granTotal = totalPagar(4, 8);

var calculadora = document.getElementById('resultado').innerHTML = granTotal + " Dolares";





/*
//SCOPE

function SCOPE1(){
    var a = 10;
    console.log(a);
}

function SCOPE2(){
    var b = 20;
    console.log(b);
}

SCOPE1();
SCOPE2();
*/




/*
//FUNCIONES QUE RETORNAN VALORES

var numero1;

function multiplicarx20(numero){
    numero *= 20;
    return numero;
}

var resultado = multiplicarx20(3);
resultado *= 2;
console.log('El valor de resultado es: '+ resultado);

const IMPUESTO = .16;
var cantidad;
function totalPagar(numero){
    numero = numero + (numero * IMPUESTO);
    return numero;
}

var resultado = totalPagar(100);
console.log(resultado * 1.03);
*/



/*
//FUNCIONES CON ARGUMENTOS

function suma(numero1, numero2){
    console.log(numero1 + numero2);
}
suma(2, 2);
suma(3, 3);
suma(20, 30);

function multiplicar(numero1, numero2){
    console.log(numero1 * numero2);
}
multiplicar(2, 2);
multiplicar(3, 3);
multiplicar(10, 10);

var frutas = [];
function array_frutas(fruta){
    frutas.push(fruta);
    console.log(frutas);
}
array_frutas('durazno');
array_frutas('manzana');
array_frutas('fresa');
array_frutas('melon');

//CARRITO
const IMPUESTO = 0.16;
var total = 0;
function carrito(articulo, precio){
    console.log('Articulo: '+articulo+' Precio: '+precio);
    total += precio + (IMPUESTO * precio);
    console.log('Impuesto: '+precio * IMPUESTO);
    console.log('Total: $'+total.toFixed(2));
}
*/




/*
//FUNCIONES

function suma(){
    console.log(2+2);
}

suma();
suma();
suma();

function suma2(){
    console.log(2+1);
}
suma2();

function array_frutas(){
    var frutas = ['fresa', 'naranja', 'manzana', 'durazno'];
    console.log(frutas);
}
array_frutas();

var mi_funcion = function(){
    var frutas = ['fresa', 'naranja', 'manzana', 'durazno'];
    console.log(frutas);
}

mi_funcion();

var auto = {
    nombre: "Mustang",
    motor: 5.5,
    color: "Azul",
    clasico: true,
    anio: 1965
}

function recorrer_objeto(automovil){
    console.log(this.nombre);
    console.log(this.motor);
    console.log(this.color);
    console.log(this.clasico);
    console.log(this.anio);
}

auto.mostrarAuto = recorrer_objeto;
auto.mostrarAuto();
*/
/*
var i = 0;
var premierleague = ["Chelsea", "Manchester United", "Liverpool", "Arsenal"];

while(i < premierleague.length){
    console.log(premierleague[i]);
    i++;
}
*/
/*
var contar = 0;
do{
    console.log(contar + " veces 7 es igual a "+ contar * 7);
}while(contar++ < 8);
*/
//FOR
/*
for(i = 20; i > 0; i--){
    if(i == 5){
        console.log("CINCO!!");
        continue;
    }
    console.log(i);
}*/
/*
var premierleague = ["Chelsea", "Manchester United", "Liverpool", "Arsenal"];

for(i = 0; i < premierleague.length; i++){
    console.log(premierleague[i]);   
}
*/
/*
//Operadores

var numero1 = 10;
var numero2 = 20;

//suma
console.log(numero1 + numero2);
//resta
console.log(numero1 - numero2);
//multiplicacion
console.log(numero1 * numero2);
//division
console.log(numero1 / numero2);

var numero3 = 30;

console.log("El numero 3 es:"+numero3);
numero3 += 20;
console.log("El numero 3 es:"+numero3);
numero3 -= 20;
console.log("El numero 3 es:"+numero3);
numero3 *= 20;
console.log("El numero 3 es:"+numero3);
numero3 /= 20;
console.log("El numero 3 es:"+numero3);

//Ejemplo

var cantidadaPagar = 100;
var saldo = 120;
var recargaTelefono = 10;

console.log("=======================");
console.log("=========CARRITO=======");
console.log("=======================");

if(saldo > cantidadaPagar){
    console.log("Pago realizado");
    saldo -= cantidadaPagar;
    console.log("Tienes un saldo de: "+saldo);
    if(recargaTelefono < saldo){
        console.log("La recarga se hizo con exito");
        saldo -= recargaTelefono;
        console.log("Tienes un saldo de: "+saldo);
    }
    else{
        console.log("No alcanzo para la recarga");
    }
}
    else{
        console.log("No se pudo pagar");
    }
*/
/*
//Metodo de pago

var metodoDePago = 'Cheque';

switch (metodoDePago) {
    case "TC":
        console.log("Se pago con tarjeta de credito");
        break;

    case "Efectivo":
        console.log("Se pago con Efectivo");
        break;

    case "PayPal":
        console.log("Se pago con PayPal");
        break;

    default:
        console.log("Metodo no valido");
        break;
}
*/
/*
//if con && y ||

var cantidadaPagar = 100;
var saldo = 101;
var recargaTelefono = 10;
var usuarioValido = true;

if(saldo > cantidadaPagar && usuarioValido){
    console.log("Se pagó correctamente");
}
    else{
        console.log("No se pudo pagar");
    }

var cantidadaPagar = 1000;
var efectivo = 500;
var tarjetaCredito = true;
if(efectivo > cantidadaPagar || tarjetaCredito){
    console.log("Pago realizado");
}
    else{
        console.log("Te falta efectivo");
    }
*/


/*
//if
var cantidadaPagar = 100;
var saldo = 500;

if(saldo > cantidadaPagar){
    console.log("No hay saldo para pagar");
}else{
    console.log("El pago se realizó con exito");
}

var edad1 = 20;
var edad2 = 20;

if(edad1 > edad2){
    console.log("edad1 es mayor");
}
    else if(edad1 == edad2){
    console.log("Son iguales");
}
    else{
    console.log("edad2 es mayor");
}

var edad3 = "20";
var edad4 = 20;

if(edad3 === edad4){
    console.log("Son iguales");
}
    else{
    console.log("No son iguales");
}

console.log("comparando textos");
var texto1 = "Hola Mundo";
var texto2 = "hola mundo";

if(texto1.toLowerCase() == texto2.toLowerCase()){
    console.log("Son iguales");
}
    else{
        console.log("Son diferentes");
    }
*/
/*
//Strings o cadenas

var texto = "Esto es una cadena de texto";
console.log(texto);
console.log(typeof(texto));
console.log(texto.toUpperCase());
console.log(texto.length);
console.log(texto.split(" "));
console.log(texto.indexOf("cadena"));
console.log(texto.slice(0, 11));
console.log(texto.toLowerCase());
*/
/*
//fechas
var fecha = new Date();
console.log("El año actual es: "+ fecha.getFullYear());
console.log("El dia actual es: "+ fecha.getDate());
console.log("El dia de la semana es: "+ fecha.getDay());
console.log("La hora es: "+ fecha.getHours());
console.log("Con: "+ fecha.getMinutes());
*/
//Numeros
/*
var numero1 = "15";
var numero2 = -20;
var numero3 = 21.5;
var numero4 = 20;
var numero5 = "3.1416";
var numero6 = -30.5;

console.log(typeof(numero1));//typeOf ver que tipo de datos es.. string, numero, etc.
console.log(typeof(numero2));
console.log(typeof(numero3));
console.log(typeof(numero4));
console.log(typeof(numero5));
console.log(typeof(numero6));

var numero7 = parseInt(numero1);
console.log(numero7 + 20);

var numero8 = parseFloat(numero5);
console.log((numero8 + 20).toFixed(2));//toFixed() acorta decimales

var numero9 = Number(numero1);//number convierte string a numero
console.log(typeof(numero9));
*/
//Espacios en blanco
/*
var nombre = "juan";
console.log(nombre);

var persona = {
    nombre: "juan",
    profesion: "Desarrollador Web"
};
console.log(persona);
*/


/*
var premierleague = ["Chelsea", "Manchester United", "Liverpool", "Arsenal"];
console.log(premierleague);
premierleague.push("Manchester City");
console.log(premierleague);

premierleague[2] = "Leicester";
//console.log imprime los valores en consola
console.log(premierleague);
console.log(premierleague.indexOf("Manchester United"));//indeOf busca en un array
premierleague.pop();
console.log(premierleague);

premierleague.splice(1, 2);//splice elimina elemntos de un array
console.log("Con Splice "+ premierleague);

//Con fitro

console.log("Filtro");
var premierleague = ["Chelsea", "Manchester United", "Liverpool", "Arsenal"];
var nuevoArreglo = premierleague.filter(function(equipo){
    return (equipo !== "Chelsea");
});

console.log(nuevoArreglo);
*/

/*
var la_liga = new Array("Barcelona", "Real Madrid", "Atletico Madrid");

console.log(la_liga);

/*var auto = {
    nombre: "Mustang",
    motor: 5.5,
    color: "Azul",
    clasico: true,
    anio: 1965
}
console.log(auto.nombre);
console.log(auto.motor);
console.log(auto.color);
console.log(auto.clasico);
console.log(auto.anio);
*/
/*
var nombre = prompt("como te llamas?");
        var pais = prompt("De donde eres?");
        alert("Bienvenido "+ nombre + " de "+ pais);
*/
/*
var modelo = "Mustang";
var motor = 5.5;
var color = "azul";

var modelo2, motor2, color2;

modelo2 = "Camaro";
motor2 = 5.8;
color2 = "negro";*/
/*
var modelo = "Mustang";
console.log(modelo);*/