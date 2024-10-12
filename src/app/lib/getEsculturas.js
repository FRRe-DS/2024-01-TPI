import {query} from './strapi';

export function getEsculturas(){
    return query('esculturas');
}