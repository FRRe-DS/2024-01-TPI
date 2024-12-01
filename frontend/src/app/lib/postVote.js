import { query } from "./strapi";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export async function postVote(data){
    const eventoId = await getEventoFromEscultura(data.escultura);
    data.evento = eventoId;

    const correoId = await crearCorreo(data.email);
    console.log(correoId);
    data.email = correoId;

    const response = await fetch(`${API_URL}/api/votos`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify(
        {
          data: data
        }
      ),
    });

  const datos = await response.json();

  return datos;
}

async function getEventoFromEscultura(id){
    const response = await query(`esculturas/${id}?populate=evento`);
    
    const dato = response.data.evento.documentId;    
    return dato;
}

async function crearCorreo(email){
  const correoExiste = await chequearCorreo(email);
  // si el correo ya existe
  if (correoExiste){
    console.log("Correo ya existe");
    return correoExiste;
  }
  // si el correo no existe
  const response = await fetch(`${API_URL}/api/emails`, {
    method: "POST",
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: {
        // Asegúrate de que los datos aquí coincidan con el modelo definido en Strapi
        correo: email,
      },
    }),
  });

  const datos = await response.json();
  if (datos){
    console.log("Correo creado")
    console.log(datos);
  }
  return datos.data.documentId;
}

async function chequearCorreo(email){
  const response = await query(`emails?filters[correo][$contains]=${email}`);
  if (response){
    return null;
  } else {
    console.log(response.data);
    return response.data[0].documentId;
  }
}