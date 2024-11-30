import {query} from './strapi';
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function getEscultura(documentId){
    return query(`esculturas/${documentId}?populate[imagen_despues][fields][0]=url&populate[imagen_antes][fields][0]=url&populate[imagen_durante][fields][0]=url&populate[escultor][fields][0]=nombre&populate[escultor][fields][1]=apellidos&populate[escultor][pais][fields][0]=nombre&populate[tematica][fields][0]=nombre`)
        .then(res=> {
            const {nombre, descripcion, fecha_finalizacion} = res.data;
            const imagen_antes = res.data.imagen_antes == null ? '' : `${API_URL}${res.data.imagen_antes.url}`;
            const imagen_durante = res.data.imagen_durante == null ? '' : `${API_URL}${res.data.imagen_durante[0].url}`;
            const imagen_despues = res.data.imagen_despues == null ? '' : `${API_URL}${res.data.imagen_despues.url}`;
            const escultor = res.data.escultor.nombre + ' ' + res.data.escultor.apellidos;
            const pais = res.data.escultor.pais;
            const tematica = res.data.tematica.nombre;
            return {nombre, descripcion, fecha_finalizacion, imagen_despues, imagen_antes, imagen_durante, escultor, pais, tematica};
        });
}

export function getEscultor(documentId){
    return query(`escultores/${documentId}?populate[imagen][fields][0]=url&populate[escultura][populate][imagen_despues][fields][0]=url&populate[pais][populate][imagen][fields][0]=url&populate[pais][fields][0]=nombre&populate[escultura][fields][0]=nombre`)
        .then(res=> {
            const {biografia, obras_previas} = res.data;
            const nombre = res.data.nombre + ' ' + res.data.apellidos;
            const imagen = res.data.imagen == null ? '' : `${API_URL}${res.data.imagen.url}`;
            const escultura = res.data.escultura.nombre;
            const img_escultura = `${API_URL}${res.data.escultura.imagen_despues.url}`;
            const id_escultura = res.data.escultura.documentId;
            const pais = res.data.pais.nombre;
            const img_pais = `${API_URL}${res.data.pais.imagen.url}`;
            return {nombre, biografia, imagen, escultura, img_escultura, id_escultura, obras_previas, pais, img_pais};
        });
}

export function getEvento(documentId){
    return query(`eventos/${documentId}?populate=esculturas&populate=esculturas.imagen_despues&populate=tematica&populate=imagen`)
        .then(res=> {
            const {documentId, nombre, descripcion, fecha_hora, lugar } = res.data;
            
            const imagen = res.data.imagen == null ? '' : `${API_URL}${res.data.imagen.url}`;
            const tematica = res.data.tematica.nombre;
            const esculturas = res.data.esculturas.map(escultura=>{
                const {documentId, nombre} = escultura;
                const imagen = `${API_URL}${escultura.imagen_despues.url}`;
                return {documentId, nombre, imagen};
            });
            
            return {documentId, nombre, descripcion, fecha_hora, lugar, imagen, tematica, esculturas};
        });
}