import {query} from './strapi';
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function filtrarEventos(fecha){
    let url = `eventos?filters[fecha_hora][$gte]=${fecha}&pagination[pageSize]=5`;

    return query(url)
        .then(res=> {
            const {data, meta} = res;
            const eventos =  data.map(evento=>{
                const {documentId, nombre, fecha_hora, fecha_finalizacion, imagen} = evento;
                return {documentId, nombre, imagen, fecha_hora, fecha_finalizacion, imagen};
            })
            return {eventos: eventos, meta : meta.pagination};
        });
}

export async function obtenerEsculturasSegunEvento(eventoId){
    const response = await query(`eventos/${eventoId}?populate=esculturas`)
        .then(res=> {
            const {data, meta} = res;
            const esculturas =  data.map(escultura=>{
                const {documentId, nombre} = escultura;
                const imagen = escultura.img_despues;
                return {documentId, nombre, imagen};
            })
            return {esculturas, meta : meta.pagination};
        });
    return response;
}