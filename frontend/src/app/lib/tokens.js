import { query } from "./strapi";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export async function createToken(token, escultura){
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000).toISOString();
    const data = {
        token: token,
        expiresAt: expiresAt,
        escultura: escultura,
    }

    const response = await fetch(`${API_URL}/api/tokens`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({
            data: data
        })
    });

    return response.json();
}

export async function getToken(escultura){
    const response = await query(`tokens?filters[escultura][$eq]=${escultura}`);
    if (response.data.length > 0){
        console.log(response.data);
        return response.data[1];
    }
}

export async function updateToken(token, nuevoToken) {
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000).toISOString();
    const data = {
        token: nuevoToken,
        expiresAt: expiresAt,
    };

    const response = await fetch(`${API_URL}/api/tokens/${token}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({
            data: data,
        }),
    });

    if (!response.ok) {
        throw new Error(`Error al actualizar el token: ${response.statusText}`);
    }

    return response.json();
}

