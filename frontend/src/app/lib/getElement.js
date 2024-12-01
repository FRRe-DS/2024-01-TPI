import {query} from './strapi';

export function getEscultura(documentId){
    return query(`esculturas/${documentId}?populate[escultor][pais][fields][0]=nombre&populate[tematica][fields][0]=nombre`)
        .then(res=> {
            const {nombre, descripcion, fecha_finalizacion} = res.data;
            const imagen_antes = res.data.img_antes == null ? '' : res.data.img_antes.url;
            const imagen_durante = res.data.img_durante == null ? '' : res.data.img_durante;
            const imagen_despues = res.data.img_despues == null ? '' : res.data.img_despues;
            const escultor = res.data.escultor.nombre + ' ' + res.data.escultor.apellidos;
            const pais = res.data.escultor.pais;
            const tematica = res.data.tematica.nombre;
            return {nombre, descripcion, fecha_finalizacion, imagen_despues, imagen_antes, imagen_durante, escultor, pais, tematica};
        });
}

export function getEscultor(documentId){
    return query(`escultores/${documentId}?populate=escultura&populate=pais`)
        .then(res=> {
            const {biografia, obras_previas} = res.data;
            const nombre = res.data.nombre + ' ' + res.data.apellidos;
            const imagen = res.data.foto == null ? '' : res.data.foto;
            const escultura = res.data.escultura.nombre;
            const img_escultura = res.data.escultura.img_despues;
            const id_escultura = res.data.escultura.documentId;
            const pais = res.data.pais.nombre;
            const img_pais = res.data.pais.url;
            return {nombre, biografia, imagen, escultura, img_escultura, id_escultura, obras_previas, pais, img_pais};
        });
}

export function getEvento(documentId){
    return query(`eventos/${documentId}?populate=esculturas&populate=tematica`)
        .then(res=> {
            const {documentId, nombre, descripcion, fecha_hora, lugar } = res.data;
            
            const imagen = res.data.imagen == null ? '' : res.data.imagen;
            const tematica = res.data.tematica.nombre;
            const esculturas = res.data.esculturas.map(escultura=>{
                const {documentId, nombre} = escultura;
                const imagen = escultura.img_despues;
                return {documentId, nombre, imagen};
            });
            
            return {documentId, nombre, descripcion, fecha_hora, lugar, imagen, tematica, esculturas};
        });
}