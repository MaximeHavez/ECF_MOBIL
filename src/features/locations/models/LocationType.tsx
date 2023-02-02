import {LocataireType} from "../../locataires/models/LocataireType";
import {VehiculeType} from "../../vehicules/models/VehiculeType";

export class LocationType {
    id!: string;
    dateDebut : string
    dateFin : string
    prix : number
    locataire : LocataireType
    vehicule : VehiculeType

    constructor(dateDebut: string, dateFin: string, prix: number, locataire: LocataireType, vehicule: VehiculeType) {
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.prix = prix;
        this.locataire = locataire;
        this.vehicule = vehicule;
    }
}