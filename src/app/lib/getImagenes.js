import {query} from './strapi';

export function getImagenes(){
    return query('imagenes?populate[imagen][fields][0]=url');
}