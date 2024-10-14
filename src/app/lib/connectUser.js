const API_TOKEN2 = process.env.NEXT_PUBLIC_API_TOKEN2;
const API_URL = process.env.NEXT_PUBLIC_API_URL;


export async function connectUser(data){
    return await fetch(`${API_URL}/auth/local`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN2}`
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
}