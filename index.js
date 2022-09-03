function preguntas () {
  let precio = parseInt(prompt("Ingresa el precio del producto que seleccionaste"));
  let meses = parseInt(prompt("Ingresa la cantidad de cuotas sin interes que queres (3, 6 o 12)"));
  dividir(precio, meses);
}
function dividir(num1, num2){
  if (num2 == 3 || num2 == 6 || num2 == 12 ){
    let numeros = num1/num2;
    let decimales = numeros.toFixed(2);
    alert("El precio a pagar por mes es de " + decimales + "$");
  }else{
    alert("La cantidad de cuotas seleccionadas es incorrecta, solo puede ser 3/6/12");
    preguntas();
  }
}

let precio = parseInt(prompt("Ingresa el precio del producto que seleccionaste"));
let meses = parseInt(prompt("Ingresa la cantidad de cuotas sin interes que queres (3, 6 o 12)"));

dividir(precio, meses);