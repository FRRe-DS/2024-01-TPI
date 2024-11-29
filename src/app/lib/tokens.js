import { query } from "./strapi";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export async function createToken(token, escultura){
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
    const data = {
        token: token,
        expiresAt: expiresAt,
        escultura: escultura,
    }

    const response = await fetch(`${API_URL}/tokens`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`,
            body: JSON.stringify({
                data: data
            })
        }
    });

    return response.json();
}

export async function getToken(escultura){
    const response = await query(`/tokens?filters[token][$eq]=${escultura}`);
    if (response){
        return response[0];
    }
}

export async function deleteToken(token){
    const response = await fetch(`${API_URL}/tokens/${token}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${API_TOKEN}`
        }
    });

    return response.json();
}
