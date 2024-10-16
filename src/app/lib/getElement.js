import {query} from './strapi';
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function getEscultura(collection, documentId){
    return query(`${collection}/${documentId}?populate[imagen_despues][fields][0]=url&populate[imagen_antes][fields][0]=url&populate[imagen_durante][fields][0]=url&populate[escultor][fields][0]=nombre&populate[escultor][fields][1]=apellidos&populate[escultor][fields][2]=pais&populate[tematica][fields][0]=nombre`)
        .then(res=> {
            const {nombre, descripcion, fecha_finalizacion} = res.data;
            const imagen_antes = res.data.imagen_antes == null ? '' : `${API_URL}${res.data.imagen_antes.url}`;
            const imagen_durante = res.data.imagen_durante[0] == null ? '' : `${API_URL}${res.data.imagen_durante[0].url}`;
            const imagen_despues = res.data.imagen_despues == null ? '' : `${API_URL}${res.data.imagen_despues.url}`;
            const escultor = res.data.escultor.nombre + ' ' + res.data.escultor.apellidos;
            const pais = res.data.escultor.pais;
            const tematica = res.data.tematica.nombre;
            return {nombre, descripcion, fecha_finalizacion, imagen_despues, imagen_antes, imagen_durante, escultor, pais, tematica};
        });
}

export function getEscultor(documentId){
    return query(`escultores/${documentId}?populate[imagen][fields][0]=url&populate[escultura][fields][0]=nombre`)
        .then(res=> {
            const {biografia, pais, obras_previas} = res.data;
            const nombre = res.data.nombre + ' ' + res.data.apellidos;
            const imagen = res.data.imagen == null ? '' : `${API_URL}${res.data.imagen.url}`;
            const escultura = res.data.escultura.nombre;
            return {nombre, biografia, pais, imagen, escultura, obras_previas};
        });
}

export function getEvento(documentId){
    return query(`eventos/${documentId}?populate[imagen][fields][0]=url&populate[tematica][fields][0]=nombre`)
        .then(res=> {
            const {documentId, nombre, descripcion, fecha_hora, lugar } = res.data;
            
            const imagen = res.data.imagen == null ? '' : `${API_URL}${res.data.imagen.url}`;
            const tematica = res.data.tematica.nombre;
            
            return {documentId, nombre, descripcion, fecha_hora, lugar, imagen, tematica};
        });
}