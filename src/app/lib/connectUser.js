// const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;
const API_URL = process.env.NEXT_PUBLIC_API_URL;


export async function connectUser(data){
    const response = await fetch(`${API_URL}/api/auth/local`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const datos = await response.json();

  if (datos.jwt) {
    localStorage.setItem("jwt", datos.jwt);
    localStorage.setItem("user", datos.user.username);
    localStorage.setItem("role", datos.user.role_in_raw);
    window.dispatchEvent(new Event("storage"));
  }

  return datos;
}

export async function postUser(data){
    const response = await fetch(`${API_URL}/api/auth/local/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    
      const datos = await response.json();
    
      if (datos.jwt) {
        localStorage.setItem("jwt", datos.jwt);
        localStorage.setItem("user", datos.user.username);
        localStorage.setItem("role", datos.user.role_in_raw);

        window.dispatchEvent(new Event("storage"));
      }
        
      return datos;
}

export async function getUser(jwt){
    return await fetch(`${API_URL}/api/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`
        }
    }).then(res => res.json());
}

export async function getSculptFromUser(jwt){
  const user = await fetch(`${API_URL}/api/users/me?populate=esculturas`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
    }
  }).then(res => res.json());
  console.log(user);

  // obtener el documentId y nombre de cada escultura del usuario
  return user.esculturas.map(escultura => ({id: escultura.documentId, nombre: escultura.nombre}));
}
