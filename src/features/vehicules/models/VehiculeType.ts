export class VehiculeType {
    id!: string;
    marque: string;
    modele:string;
    immatriculation:string;
    type:string;
    prix:number;
    etat:string;
    status:string;

    constructor(marque: string, modele: string, immatriculation: string, type: string, prix: number, etat: string, status: string) {
        this.marque = marque;
        this.modele = modele;
        this.immatriculation = immatriculation;
        this.type = type;
        this.prix = prix;
        this.etat = etat;
        this.status = status;
    }
}