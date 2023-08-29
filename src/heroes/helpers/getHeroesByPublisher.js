

import { heroes } from '../data/heroes';

export const getHeroesByPublisher  = ( publisher ) => { //Retorna los heroes segun el publicador

    const validPublishers = ['DC Comics','Marvel Comics'];
    if ( !validPublishers.includes( publisher ) ) {
        throw new Error(` ${ publisher } is not a valid publisher`);
    }

    return heroes.filter( heroes => heroes.publisher === publisher );
}