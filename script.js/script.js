//var nombre = "Isaias";
//var apellido = "Funes";

//console.log(nombre + " " + apellido);

// var numero = 0;
//  while(numero<11){
//      console.log("el " + numero + " ingresado es mas chico que 11")
//      numero = numero + 1;
//  }
//  console.log("fin del bucle");

// var topping = prompt("que topping queres? 1 - oreo, 2 - kitkat, 3 - kinder");
//  var precio = 0;
//  var precioFinal = 0; 
//  var helado = 20;

//  if(topping == 1){
//      precio = 10;
//      precioFinal = helado + precio;
//      console.log("El helado cuesta $ " + precioFinal);
//  }else if(topping == 2){
//      precio = 15;
//      precioFinal = helado + precio;
//      console.log("El helado cuesta $ " + precioFinal);
//  }else if(topping == 3){
//      precio = 25;
//      precioFinal = helado + precio;
//      console.log("El helado cuesta $ " + precioFinal);
//  }else{
//    alert("No tenemos este topping")
//  }
//  var menu =Number(prompt("que menu queres? 1-carne, 2-pescado, 3-verdura"));

// switch(menu) {
//     case 1:
//         alert ("El menu incluye vino tinto");
//         break;
//     case 2:
//         alert ("El menu incluye vino blanco");
//         break;
//     case 3:
//         alert ("El menu incluye agua");
//         break;
//     default:
//       alert("Elija, carne, pescado o verdura");
// }
var nombre = prompt("ingresa tu nomrbe");
function saludo(nombre){
    alert("holaaa " + nombre);
    if(nombre==""){
         alert("no has ingresado un nombre");
    
    }

}
saludo(nombre)

