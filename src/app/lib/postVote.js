const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function connectUser(data){
    const response = await fetch(`${API_URL}/api/votos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const datos = await response.json();

  return datos;
}