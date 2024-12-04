'use client'

import { useState, useEffect } from 'react';
import { getSculptFromUser } from '../lib/connectUser';
import QRCode from 'react-qr-code';
import { v4 as uuidv4 } from 'uuid';
import { createToken, getToken, updateToken} from '../lib/tokens';


async function generarToken(esculturaId) {
    const token = uuidv4();
    const infoToken = await getToken(esculturaId);
    const tokenId = infoToken ? infoToken.documentId : null;
    if (tokenId){
        await updateToken(tokenId, token);
    } else {
        await createToken(token, esculturaId);
    }

    return token;
}

async function actualizarToken(id, nuevoToken){
    const infoToken = await getToken(id);
    const tokenId = infoToken ? infoToken.documentId : null;
    if (tokenId){
        await updateToken(tokenId, nuevoToken);
    }
}

async function generarURL(esculturaId) {
    const token = await generarToken(esculturaId); // Espera el token generado
    return `http://localhost:3000/votaciones/${esculturaId}${token}`;
}

export default function Page() {
    const [esculturas, setEsculturas] = useState(null);
    const [urls, setUrls] = useState({});

    useEffect(() => {
        const getSculp = async () => {
            try {
                const escultu = await getSculptFromUser(localStorage.getItem('jwt'));
                setEsculturas(escultu); // Guardamos el resultado en el estado
        
                // Generar todas las URLs en paralelo
                const urls = await Promise.all(
                    escultu.map(async (escultura) => {
                        const url = await generarURL(escultura.id);
                        return { id: escultura.id, url };
                    })
                );
        
                const urlsObject = urls.reduce((acc, { id, url }) => {
                    acc[id] = url;
                    return acc;
                }, {});
                setUrls(urlsObject);
            } catch (error) {
                console.error("Error obteniendo las esculturas o generando URLs:", error);
            }
        };
    
        const actualizarURLs = async () => {
            try {
                const newUrls = {};
                for (const id in urls) {
                    const nuevaURL = await generarURL(id); // Genera nueva URL
                    await actualizarToken(id, nuevaURL); // Actualiza el token en la base de datos
                    newUrls[id] = nuevaURL; // Guarda la nueva URL
                }
                setUrls(newUrls);
            } catch (error) {
                console.error("Error actualizando las URLs:", error);
            }
        };
    
        getSculp();
    
        // Actualizar URLs cada 5 minutos
        const interval = setInterval(() => {
            actualizarURLs();
        }, 300000); // 300,000 milisegundos = 5 minutos
    
        return () => clearInterval(interval);
    }, []);
    

    if (!esculturas || Object.keys(urls).length === 0) {
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