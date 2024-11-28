'use client'
import { useState, useEffect } from 'react';
import { getSculptFromUser } from '../lib/connectUser';
import Modal from 'react-modal';
import QRCode from 'react-qr-code';

function generarPalabraBasadaEnHora() {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const caracteresLength = caracteres.length;
    const ahora = new Date();
    const semilla = ahora.getTime(); // Usamos el tiempo actual en milisegundos como semilla
    let resultado = '';

    for (let i = 0; i < 24; i++) {
        const indice = Math.floor((Math.sin(semilla + i) * 10000) % caracteresLength);
        resultado += caracteres.charAt(Math.abs(indice));
    }

    return resultado;
}

function generarURL(esculturaId) {
    return `http://localhost:3000/votaciones/${esculturaId + generarPalabraBasadaEnHora()}`;
}

export default function Page() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [esculturas, setEsculturas] = useState(null);
    const [urls, setUrls] = useState({});

  useEffect(() => {
    const getSculp = async () => {
        const escultu = await getSculptFromUser(localStorage.getItem('jwt'));
        setEsculturas(escultu); // Guardamos el resultado en el estado
        // Inicializar URLs
        const initialUrls = {};
        escultu.forEach(escultura => {
                initialUrls[escultura.id] = generarURL(escultura.id);
                localStorage.setItem(`${escultura.id}`, initialUrls[escultura.id].slice(-24));
            });
            setUrls(initialUrls);
        };
    getSculp();

    // Actualizar URLs cada 5 minutos
    const interval = setInterval(() => {
        setUrls(prevUrls => {
            const newUrls = {};
            for (const id in prevUrls) {
                newUrls[id] = generarURL(id);
                localStorage.setItem(`${id}`, newUrls[id].slice(-24));
            }
            return newUrls;
        });
    }, 300000); // 300,000 milisegundos = 5 minutos

    return () => clearInterval(interval);

    }, []);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

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
                    {/* <button onClick={openModal}>QR</button>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="QR"
                    >
                        <button onClick={closeModal}>Cerrar</button>
                    </Modal> */}
                </div>
            ))}
        </div>
    );
}