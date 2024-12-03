import {query} from './strapi';
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function filtrarEsculturas(tematica){
    const nuevaTematica = tematica.toLowerCase().replace(" ", "+");

    let url = `esculturas?filters[tematica][nombre][$contains]=${nuevaTematica}&populate[imagen_despues][fields][0]=url`;

    return query(url)
        .then(res=> {
            const {data, meta} = res;
            const esculturas =  data.map(escultura=>{
                const {documentId, nombre} = escultura;
                const imagen = `${API_URL}${escultura.img_despues}`;
                return {documentId, nombre, imagen};
            })
            return {esculturas, meta : meta.pagination};
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