export class LocataireType {
    id!: string
    nom: string
    prenom: string
    email: string
    motDePasse: string

    constructor(nom: string, prenom: string, email: string, motDePasse: string) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.motDePasse = motDePasse;
    }
}