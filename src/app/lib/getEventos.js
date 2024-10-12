import {query} from './strapi';

export default function getEventos(){
    return query('eventos')
        .then(res=> {
            console.log(res);
            return res;
        });
}