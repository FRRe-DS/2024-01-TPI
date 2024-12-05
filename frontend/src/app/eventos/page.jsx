"use client";

import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Carrousel from '../reactComponents/componentes/Carrousel';
import BotonVolver from "../reactComponents/componentes/BotonVolver";
import Link from "next/link";
import { getEventos } from "../lib/getElementos";
import { filtrarEventos } from "../lib/filtrarEsculturas";
import "react-datepicker/dist/es/index.js"; // Importación de react-datepicker
import "react-datepicker/dist/react-datepicker.css"; // CSS de react-datepicker
import styles from "./page.module.css";

function getCurrentDateFormatted() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export default function AgendaEventos() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [eventosRec, setEvRc] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  // Cargar eventos desde el servidor
  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const eventos = await getEventos(); 
        setEvents(eventos); 
        console.log(eventos)
        const fecha = getCurrentDateFormatted();
        const evrec = await filtrarEventos(fecha);
        setEvRc(evrec.eventos);
        console.log(evrec.eventos)
      } catch (error) {
        console.error("Error al obtener los eventos:", error);
      }
    };

    fetchEventos(); // Llamar a la función asíncrona
  }, []);

  // Filtrar eventos según la fecha seleccionada
  useEffect(() => {
    const selectedDateString = selectedDate.toISOString().split("T")[0];

    const filterEvents = events.filter(
      (event) => event.fecha === selectedDateString
    );

    setFilteredEvents(filterEvents);
  }, [selectedDate, events]);

  const formattedDate = selectedDate.toLocaleDateString(undefined, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (!eventosRec) {
    return <p>Cargando eventos...</p>;
  }
  else {

  return (
    <>
      <BotonVolver retorno={"/"} />
      <main className={styles.cuerpoEventos}> 
        <h1 className={styles.titulo}>Eventos recientes</h1>
        <Carrousel eventosRec={eventosRec}></Carrousel>


        <div className={styles.calendarContainer}>
          <div className={styles.calendar}>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              inline
            />
          </div>
          <div className={styles.eventDetails}>
            <h3 className={styles.tituloFechaSeleccionada}>
              Eventos para el {formattedDate}
            </h3>
            <hr className={styles.divisor} />
            <div className={styles.eventList}>
              {filteredEvents.length > 0 ? (
                <ul className={styles.listaEventos}>
                  {filteredEvents.map((event) => (
                    <li key={event.documentId} className={styles.elementoEvento}>
                      <Link className={styles.links} href={"eventos/" + event.documentId}>
                        {event.nombre}
                      </Link>
                      <p className={styles.hora}>{event.hora_inicio.substring(0,5)} {event.hora_fin? `- ${event.hora_fin.substring(0,5)}`:''}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={styles.mensajeSinEventos}>No hay eventos</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
}