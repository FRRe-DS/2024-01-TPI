'use client'
import { useState, useEffect } from 'react';
import { getSculptFromUser } from '../lib/connectUser';
import QRCode from 'react-qr-code';
import { v4 as uuidv4 } from 'uuid';
import { createToken, getToken, deleteToken} from '../lib/tokens';


async function generarToken(esculturaId) {
    const token = uuidv4();
    console.log(esculturaId);

    await createToken(token, esculturaId);

    return token;
}

async function actualizarToken(id, nuevoToken){
    const tokenId = await getToken(id);
    if (tokenId){
        await deleteToken(tokenId);
        const response = await createToken(nuevoToken, id);
    }
}

async function generarURL(esculturaId) {
    return await `http://localhost:3000/votaciones/${esculturaId + generarToken(esculturaId)}`;
}

export default function Page() {
    const [esculturas, setEsculturas] = useState(null);
    const [urls, setUrls] = useState({});
    

  useEffect(() => {
    const getSculp = async () => {
        const escultu = await getSculptFromUser(localStorage.getItem('jwt'));
        setEsculturas(escultu); // Guardamos el resultado en el estado
        // Inicializar URLs
        const initialUrls = {};
        for (const escultura of escultu) {
            initialUrls[escultura.id] = await generarURL(escultura.id);
        }
        setUrls(initialUrls);
    };
    getSculp();

    // Actualizar URLs cada 5 minutos
    const interval = setInterval(() => {
        setUrls(prevUrls => {
            const newUrls = {};
            for (const id in prevUrls) {
                newUrls[id] = generarURL(id);
                actualizarToken(id, newUrls[id]);
            }
            return newUrls;
        });
    }, 300000); // 300,000 milisegundos = 5 minutos

    return () => clearInterval(interval);

    }, []);

    if (!esculturas) {
        return <p>Cargando...</p>;
    }

    return (
        <div id="root">
            <h1>Mis Esculturas</h1>
            <p>Estas son mis esculturas</p>
            {esculturas.map((escultura) => (
                <div key={escultura.id}>
                    <h2>{escultura.nombre}</h2>
                    <p>{urls[escultura.id]}</p>
                    <QRCode value={urls[escultura.id]} />
                </div>
            ))}
        </div>
    );
}