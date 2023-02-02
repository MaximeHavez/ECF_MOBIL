import {LocationType} from "../models/LocationType";

export class LocationServices {
    findAll = async () => {
        const response = await fetch('http://localhost:8080/locations');
        const data = await response.json();
        return data
    }

    findLocationById = async (id : string) => {
        const response = await fetch(`http://localhost:8080/locations/${id}`);
        const data = await response.json();
        return data
    }

    addLocation = (location : LocationType) => {
        return fetch('http://localhost:8080/locations', {
            method:'POST',
            body: JSON.stringify(location),
            headers:{'Content-type':'application/json'}
        })
            .then(response => response.json())
    }

    deleteLocation = async (id:string) => {
        return  fetch(`http://localhost:8080/locations/${id}`, { method: 'DELETE' })
    }


    updateLocation = async (location : LocationType, id:string) => {

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(location)
        }
        fetch(`http://localhost:8080/locations/${id}`, requestOptions)
            .then(response => response.json())
    }
}

export const callLocationService = Object.freeze(new LocationServices())