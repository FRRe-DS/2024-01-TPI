import {query} from './strapi';
const API_URL = process.env.NEXT_PUBLIC_API_URL;


export function getEscultores(){
    return query('escultores?fields[0]=nombre&fields[1]=apellidos&fields[2]=pais&populate[imagen][fields][0]=url')
        .then(res=> {
            return res.data.map(escultor=>{
                const {id, nombre, apellidos, pais} = escultor;
                const imagen = `${API_URL}${escultor.imagen.url}`;
                return {id, nombre, apellidos, pais, imagen};
            })
        });
}