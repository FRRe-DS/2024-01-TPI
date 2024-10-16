// Esto marca el componente como Client Component
// Se usa porque Next no permite el uso de hooks
"use client";

import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; //CSS de react-datepicker
import {getEventos} from '../lib/getElementos';
import Link from 'next/link';

export default function AgendaEventos() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);

    // Cargar eventos desde el servidor
    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const eventos = await getEventos(); // Esperar a que la promesa se resuelva
                setEvents(eventos); // Guardar los eventos en el estado
            } catch (error) {
                console.error('Error al obtener los eventos:', error);
            }
        };

        fetchEventos(); // Llamar a la función asíncrona
    }, []); 
    

    // Filtrar eventos según la fecha seleccionada
    useEffect(() => {
        const selectedDateString = selectedDate.toISOString().split('T')[0];

        console.log('Fecha seleccionada:', selectedDateString);

        events.forEach(event => console.log('Fecha evento:', event.fecha_hora.split('T')[0]));

        let filterEvents = events.filter(event => event.fecha_hora.split('T')[0] == selectedDateString);

        setFilteredEvents(filterEvents);

        console.log('Eventos filtrados:', filteredEvents);
    }, [selectedDate, events]);

    return (
        <div className="agenda-eventos">
            <h2>Eventos</h2>
            <div className="calendar">
                <DatePicker
                    selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy"
                    inline
                />
            </div>
            
            <div className="event-list">
                <h3>Eventos para el {selectedDate.toLocaleDateString()}</h3>
                {filteredEvents.length > 0 ? (
                    <ul>
                        {filteredEvents.map(event => (
                            <li key={event.documentId}><Link href={"eventos/"+event.documentId}>{event.nombre}</Link></li>
                        ))}
                    </ul>
                ) : (
                    <p>No hay eventos para esta fecha</p>
                )}
            </div>
        </div>
    );
}
