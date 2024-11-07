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
                const imagen = `${API_URL}${escultura.imagen_despues.url}`;
                return {documentId, nombre, imagen};
            })
            return {esculturas, meta : meta.pagination};
        });
}