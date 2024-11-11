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

export function getEsculturas(pageSize, page){
    let url = 'esculturas?fields[0]=nombre&populate[tematica][fields][0]=nombre&populate[imagen_despues][fields][0]=url';
    
    if(page) url += `&pagination[page]=${page}`;
    if(pageSize) url += `&pagination[pageSize]=${pageSize}`;

    return query(url)
        .then(res=> {
            const {data, meta} = res;
            const esculturas =  data.map(escultura=>{
                const {documentId, nombre} = escultura;
                const imagen = `${API_URL}${escultura.imagen_despues.url}`;
                const tematica = escultura.tematica.nombre;
                return {documentId, nombre, tematica, imagen};
            })
            return {esculturas, meta : meta.pagination};
        });
}

export function getEscultores(pageSize, page){
    let url = 'escultores?populate[imagen][fields][0]=url&populate[pais][populate][imagen][fields][0]=url';
    if(page) url += `&pagination[page]=${page}`;
    if(pageSize) url += `&pagination[pageSize]=${pageSize}`;

    return query(url)
        .then(res=> {
            const {data, meta} = res;

            const escultores = data.map(escultor=>{
                const {documentId, nombre, apellidos} = escultor;
                const imagen = `${API_URL}${escultor.imagen.url}`;
                const bandera = `${API_URL}${escultor.pais.imagen.url}`;
                return {documentId, nombre, apellidos, bandera, imagen};
            })
            
            return {escultores, meta : meta.pagination};
        });
}