import camelize from 'camelize';
import {locations} from './location.mock';

export const locationRequest = (searchTerm) => {
    return new Promise((resolve, reject) => {
        const locationMock = locations[searchTerm];
        if(!locationMock) reject('not found');
        resolve(locationMock);
    })
}

export const locationTransform = (result) => {
    const camelizedResults = camelize(result);
    const {geometry = {}} = camelizedResults.results[0];
    const {lat, lng} = geometry.location;
    return `${lat},${lng}`;
}
