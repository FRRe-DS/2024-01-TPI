import {query} from './strapi';

export function getEventos(){
    return query('eventos?fields[0]=nombre&fields[1]=fecha_hora&fields[2]=lugar')
        .then(res=> {
            return res.data.map(escultura=>{
                const {id, nombre, fecha_hora, lugar} = escultura;
                return {id, nombre, fecha_hora, lugar};
            })
        });
}