import {query} from './strapi';

export function getEscultores(){
    return query('escultores');
}