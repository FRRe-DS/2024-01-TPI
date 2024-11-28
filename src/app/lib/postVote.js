import { query } from "./strapi";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export async function postVote(data){
    const eventoId = await getEventoFromEscultura(data.escultura);
    data.evento = eventoId;
    crearCorreo('hola2@gmail.com')
      .then(data => console.log('Correo creado:', data))
      .catch(error => console.error('Error al crear el correo:', error));
    console.log(data)
    const response = await fetch(`${API_URL}/api/votos`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
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
  const data = {
    correo: email
  }
  const response = await fetch(`${API_URL}/api/emails`, {
    method: "POST",
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const datos = await response.json();
  if (datos){
    console.log("Correo creado")
  }
}