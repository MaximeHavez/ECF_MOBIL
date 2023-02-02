import {VehiculeType} from "../models/VehiculeType";

export class VehiculeService {

    findAll = async () => {
        const response = await fetch('http://localhost:8080/vehicules');
        const data = await response.json();
        return data
    }

    findVehiculeById = async (id : string) => {
        const response = await fetch(`http://localhost:8080/vehicules/${id}`);
        const data = await response.json();
        return data
    }

    addVehicule = (vehicules : VehiculeType) => {
        return fetch('http://localhost:8080/vehicules', {
            method:'POST',
            body: JSON.stringify(vehicules),
            headers:{'Content-type':'application/json'}
        })
            .then(response => response.json())
    }

    deleteVehicule = async (id:string) => {
        return  fetch(`http://localhost:8080/vehicules/${id}`, { method: 'DELETE' })
    }


}

export const callVehiculeService = Object.freeze(new VehiculeService())