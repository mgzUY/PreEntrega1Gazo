function sumarProductoAlCarrito() {
  let usuarioQuiereComprar = true;
  do {

    const respuestaUsuario = prompt("¿Quieres agregar este producto al carrito? (responde 'si' o 'no')");

    if (respuestaUsuario.toLowerCase() === 'si') {

      console.log("¡Añadiste este producto a tu cesta!");
    } else if (respuestaUsuario.toLowerCase() === 'no') {

      usuarioQuiereComprar = false;
    } else {

      console.log("Respuesta no válida. Por favor, responde 'si' o 'no'.");
    }

  } while (usuarioQuiereComprar);

  console.log("Gracias por visitar nuestra tienda de cartas Pokémon. ¡Hasta luego!");
}


sumarProductoAlCarrito();
