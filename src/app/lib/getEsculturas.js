import {query} from './strapi';
const API_URL = process.env.NEXT_PUBLIC_API_URL;


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