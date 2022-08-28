let numero = parseInt(prompt("ingrese un numero"));
for(let i = 0; i <= 10; i++){
  let multiplicacion = numero * i;
  let mensaje = `${numero} * ${i} = ${multiplicacion}`;
  alert(mensaje);
}