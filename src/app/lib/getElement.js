import {query} from './strapi';
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function getElement(collection, documentId){
    return query(`${collection}/${documentId}?populate[imagen_despues][fields][0]=url&populate[imagen_antes][fields][0]=url&populate[imagen_durante][fields][0]=url&populate[escultor][fields][0]=nombre&populate[escultor][fields][1]=apellidos&populate[escultor][fields][2]=pais&populate[tematica][fields][0]=nombre`)
        .then(res=> {
            const {nombre, descripcion, fecha_finalizacion} = res.data;
            const imagen_antes = res.data.imagen_antes == null ? '' : `${API_URL}${res.data.imagen_antes.url}`;
            const imagen_durante = res.data.imagen_durante == null ? '' : `${API_URL}${res.data.imagen_durante.url}`;
            const imagen_despues = res.data.imagen_despues == null ? '' : `${API_URL}${res.data.imagen_despues.url}`;
            const escultor = res.data.escultor.nombre + ' ' + res.data.escultor.apellidos;
            const pais = res.data.escultor.pais;
            const tematica = res.data.tematica.nombre;
            return {nombre, descripcion, fecha_finalizacion, imagen_despues, imagen_antes, imagen_durante, escultor, pais, tematica};
        });
}