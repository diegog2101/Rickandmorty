const API_URL = "https://rickandmortyapi.com/api/character";

async function cargarPersonajesEnPila(pila) {
  try {
    const respuesta = await fetch(API_URL);

    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    const datos = await respuesta.json();

    if (!datos.results || !Array.isArray(datos.results)) {
      throw new Error("La respuesta de la API no tiene el formato esperado.");
    }

    // Se recorre en el mismo orden que entrega la API
    for (const p of datos.results) {
      const personaje = new Personaje(p.name, p.gender, p.species, p.status);
      pila.push(personaje);
    }
  } catch (error) {
    console.error("Fallo al consumir la API:", error);
    throw error; 
  }
}