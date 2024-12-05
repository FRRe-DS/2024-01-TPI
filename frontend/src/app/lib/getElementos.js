import {query} from './strapi';

export function getEventos(){
    return query('eventos')
        .then(res=> {
            return res.data.map(evento=>{
                const {documentId, nombre, fecha, hora_inicio, hora_fin, fecha_finalizacion, lugar} = evento;
                return {documentId, nombre, fecha, lugar, fecha_finalizacion, hora_inicio, hora_fin};
            })
        });
}

export function getEsculturas(pageSize, page){
    let url = 'esculturas?populate[tematica][fields][0]=nombre';
    
    if(page) url += `&pagination[page]=${page}`;
    if(pageSize) url += `&pagination[pageSize]=${pageSize}`;

    return query(url)
        .then(res=> {
            const {data, meta} = res;
            const esculturas =  data.map(escultura=>{
                console.log(escultura)
                const {documentId, nombre} = escultura;
                const imagen = escultura.img_despues;
                const tematica = escultura.tematica.nombre;
                return {documentId, nombre, tematica, imagen};
            })
            return {esculturas, meta : meta.pagination};
        });
}

export function getEscultores(pageSize, page){
    let url = 'escultores?populate=pais';
    if(page) url += `&pagination[page]=${page}`;
    if(pageSize) url += `&pagination[pageSize]=${pageSize}`;

    return query(url)
        .then(res=> {
            const {data, meta} = res;
            

            const escultores = data.map(escultor=>{
                const {documentId, nombre, apellidos} = escultor;
                const imagen = escultor.foto;
                const bandera = escultor.pais.url;
                return {documentId, nombre, apellidos, bandera, imagen};
            })
            
            return {escultores, meta : meta.pagination};
        });
}