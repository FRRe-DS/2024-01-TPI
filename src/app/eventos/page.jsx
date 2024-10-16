// Esto marca el componente como Client Component
// Se usa porque Next no permite el uso de hooks
"use client";

import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/es/index.js"; //Importación de react-datepicker
import "react-datepicker/dist/react-datepicker.css"; //CSS de react-datepicker

export default function AgendaEventos() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  // Simulamos los eventos predefinidos (esto lo puedes cargar desde una API o base de datos)
  const sampleEvents = [
    { id: 1, title: "Evento de Prueba", date: new Date(2024, 10, 10) },
    { id: 2, title: "Conferencia Tech", date: new Date(2024, 3, 6) },
    { id: 3, title: "Feria de Arte", date: new Date(2024, 10, 10) },
  ];

  // Simula la carga de eventos
  useEffect(() => {
    // Simulamos una llamada a una API o base de datos
    setEvents(sampleEvents);
  }, []);

  // Filtrar eventos según la fecha seleccionada
  useEffect(() => {
    const selectedDateString = selectedDate.toISOString().split("T")[0];
    //console.log('Fecha seleccionada:', selectedDateString);
    //events.forEach(event => console.log('Fecha evento:', ));
    const filtered = events.filter(
      (event) => event.date.toISOString().split("T")[0] == selectedDateString
    );
    setFilteredEvents(filtered);
    //console.log('Eventos filtrados:', filtered);
  }, [selectedDate, events]);

  return (
    <div className="agenda-eventos">
      <h2>Eventos</h2>
      <div className="calendar">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          inline
        />
      </div>

      <div className="event-list">
        <h3>Eventos para el {selectedDate.toLocaleDateString()}</h3>
        {filteredEvents.length > 0 ? (
          <ul>
            {filteredEvents.map((event) => (
              <li key={event.id}>{event.title}</li>
            ))}
          </ul>
        ) : (
          <p>No hay eventos para esta fecha</p>
        )}
      </div>
    </div>
  );
}
