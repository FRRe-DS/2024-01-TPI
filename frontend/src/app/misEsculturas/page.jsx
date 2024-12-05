'use client';
import styles from './page.module.css';
import { useState, useEffect } from 'react';
import { getSculptFromUser } from '../lib/connectUser';
import QRCode from 'react-qr-code';
import { v4 as uuidv4 } from 'uuid';
import { createToken, getToken, updateToken } from '../lib/tokens';

const API_URL = 'https://bienal-dsi-grupo1.vercel.app';

async function generarToken(esculturaId) {
    const token = uuidv4();
    const infoToken = await getToken(esculturaId);
    const tokenId = infoToken ? infoToken.documentId : null;
    if (tokenId) {
        await updateToken(tokenId, token);
    } else {
        await createToken(token, esculturaId);
    }

    return token;
}

async function generarURL(esculturaId) {
    const token = await generarToken(esculturaId);
    return `${API_URL}/votaciones/${esculturaId}${token}`;
}

export default function Page() {
    const [esculturas, setEsculturas] = useState(null);
    const [urls, setUrls] = useState({});

    useEffect(() => {
        const getSculp = async () => {
            try {
                const escultu = await getSculptFromUser(localStorage.getItem('jwt'));
                setEsculturas(escultu); // Guardamos el resultado en el estado
                console.log(escultu);

                // Generar todas las URLs en paralelo
                const tempUrls = await Promise.all(
                    escultu.map(async (escultura) => {
                        // Generar URL si no existe
                        if (!urls[escultura.id]) {
                            const url = await generarURL(escultura.id);
                            return { id: escultura.id, url };
                        }
                        return { id: escultura.id, url: urls[escultura.id] };
                    })
                );

                // Crear el objeto de URLs para el estado
                const urlsObject = tempUrls.reduce((acc, { id, url }) => {
                    acc[id] = url;
                    return acc;
                }, {});
                
                // Actualizar el estado con las URLs generadas
                setUrls(urlsObject);
            } catch (error) {
                console.error("Error obteniendo las esculturas o generando URLs:", error);
            }
        };

        getSculp();

        // Actualizar URLs cada 5 minutos
        const interval = setInterval(() => {
            getSculp();
        }, 60000); // 60,000 milisegundos = 1 minutos

        return () => clearInterval(interval);
    }, []); // Dependencias vacías, solo se ejecuta una vez

    if (!esculturas || Object.keys(urls).length === 0) {
        return <p>Cargando...</p>;
    }

    return (
        <div id="root" className={styles.misEsculturasBox}>
            <h1>Mis Esculturas</h1>
            <p>Esta es mi escultura</p>
            <div className={styles.qr} key={esculturas[0].id}>
                <h2>{esculturas[0].nombre}</h2>
                <p>{urls[esculturas[0].id]}</p>
                <QRCode value={urls[esculturas[0].id]} />
            </div>
        </div>
    );
}
