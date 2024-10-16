const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;
const API_URL = process.env.NEXT_PUBLIC_API_URL;


export async function connectUser(data){
    return await fetch(`${API_URL}/api/auth/local`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
}

export async function postUser(data){
    return await fetch(`${API_URL}/api/auth/local/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
}