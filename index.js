const productos = [
  {nombre: "cuadro1", precio: 150},
  {nombre: "cuadro2" , precio: 300},
  {nombre: "cuadro3" , precio: 450},
  {nombre: "cuadro4" , precio: 600},
  {nombre: "cuadro5" , precio: 700},
  {nombre: "cuadro6" , precio: 800},
];
let carrito = []
let seleccion = prompt("Hola ¿Queres agregar algun cuadros 3d a tu carrito? si o no.")

while(seleccion.toLocaleLowerCase() != "si" && seleccion.toLocaleLowerCase() != "no"){
  alert("Por favor ingrese si o no")
  seleccion = prompt("Hola ¿Desea comprar algo? si o no.")
}

if(seleccion == "si"){
  alert("Estos son nuestros cuadros 3d disponibles")
  let todosLosProductos = productos.map((producto) => `${producto.nombre}  $${producto.precio}`);
  alert(todosLosProductos.join(" - "))
}else if(seleccion == "no"){
  alert("Gracias por la visita")
}
while(seleccion != "no"){
  let producto = prompt("Agrega un producto a tu carrito")
  let precio = 0
  
  if(producto == "cuadro1" || producto == "cuadro2" || producto == "cuadro3" || producto == "cuadro4" || producto == "cuadro5" || producto == "cuadro6"){
      switch(producto){
          case "cuadro1":
              precio = 150 ;
              break;
          case "cuadro2":
              precio = 300;
              break;
          case "cuadro3":
              precio = 450 ;
              break;
          case "cuadro4":
              precio = 600 ;
              break;
          case "cuadro5":
              precio = 700 ;
              break;
          case "cuadro6":
              precio = 800;
              break;
      }
      let unidades =parseInt(prompt("¿Cuantos queres llevar?"))
      carrito.push({producto, unidades, precio})
      console.log(carrito)
  }else{
      alert("No tenemos ese producto")
  }
  seleccion = prompt("Desea seguir comprando? si o no.")
  while(seleccion.toLocaleLowerCase() != "si" && seleccion.toLocaleLowerCase() != "no"){
      alert("Por favor ingrese si o no")
      seleccion = prompt("Desea seguir comprando? si o no.")
  }
  while(seleccion.toLocaleLowerCase() === "no"){
      alert("Gracias, hasta luego")
      carrito.forEach((carritoFinal) => {
          console.log(`producto : ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}`)
      })
      break
  }
}
const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar es: ${total}`)