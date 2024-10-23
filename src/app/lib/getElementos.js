import {query} from './strapi';
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function getEventos(){
    return query('eventos?fields[0]=nombre&fields[1]=fecha_hora&fields[2]=lugar')
        .then(res=> {
            return res.data.map(evento=>{
                const {documentId, nombre, fecha_hora, lugar} = evento;
                return {documentId, nombre, fecha_hora, lugar};
            })
        });
}

export function getEsculturas(){
    return query('esculturas?fields[0]=nombre&populate[tematica][fields][0]=nombre&populate[imagen_despues][fields][0]=url')
        .then(res=> {
            return res.data.map(escultura=>{
                const {documentId, nombre} = escultura;
                const imagen = `${API_URL}${escultura.imagen_despues.url}`;
                const tematica = escultura.tematica.nombre;
                return {documentId, nombre, tematica, imagen};
            })
        });
}

export function getEscultores(){
    return query('escultores?fields[0]=nombre&fields[1]=apellidos&fields[2]=pais&populate[imagen][fields][0]=url')
        .then(res=> {
            return res.data.map(escultor=>{
                const {documentId, nombre, apellidos, pais} = escultor;
                const imagen = `${API_URL}${escultor.imagen.url}`;
                return {documentId, nombre, apellidos, pais, imagen};
            })
        });
}