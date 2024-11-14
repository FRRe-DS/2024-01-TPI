'use client'
import { useState, useEffect } from 'react';
import { getSculptFromUser } from '../lib/connectUser';
import Modal from 'react-modal';
import QRCode from 'react-qr-code';


export default function Page() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [esculturas, setEsculturas] = useState(null);

  useEffect(() => {
    const getSculp = async () => {
        const escultu = await getSculptFromUser(localStorage.getItem('jwt'));
        setEsculturas(escultu); // Guardamos el resultado en el estado
    }
    getSculp();
    }, []);

    // useEffect(() => {
    //     Modal.setAppElement('#root'); // Cambia '#root' al ID del elemento padre
    // }, [esculturas]);

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
                    <button onClick={openModal}>QR</button>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="QR"
                    >
                        <QRCode value={`http://localhost:3000/votaciones/${escultura.id}`} />
                        <button onClick={closeModal}>Cerrar</button>
                    </Modal>
                </div>
            ))}
        </div>
    );
}