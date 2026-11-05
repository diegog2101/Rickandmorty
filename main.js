function vaciarPila(pila) {
  console.log("Desapilando personajes (orden inverso al de la API):");
  while (!pila.isEmpty()) {
    const personaje = pila.pop();
    console.log(personaje);
  }
  console.log("La pila está vacía.");
}

async function iniciar() {
  const pila = new Pila();

  try {
    await cargarPersonajesEnPila(pila);
    console.log("Cima de la pila:", pila.peek());
    vaciarPila(pila);
  } catch (error) {
    console.error("No se pudo completar el proceso:", error);
  }
}

iniciar();