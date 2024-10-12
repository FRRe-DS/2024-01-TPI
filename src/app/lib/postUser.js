const API_TOKEN2 = process.env.NEXT_PUBLIC_API_TOKEN2;
const API_URL = process.env.NEXT_PUBLIC_API_URL;


export function postUser(data){
    return fetch(`${API_URL}/auth/local/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN2}`
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
}