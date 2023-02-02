import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle, IonContent, IonIcon, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding,
    IonLabel,
    IonList, IonModal,
    IonThumbnail, IonToggle
} from "@ionic/react";
import {useEffect, useState} from "react";
import {VehiculeType} from "../models/VehiculeType";
import {callVehiculeService} from "../services/VehiculeService";
import {imageSharp, pencil, trash} from "ionicons/icons";
import '../components/VehiculeCard.css'

const VehiculeList = () => {

    const [vehiculeList, setVehiculeList] = useState<VehiculeType[]>([])

    const [newVehicule, setNewVehicule] = useState<VehiculeType>(new VehiculeType("","","","",0, "",""))
    const [switchToggle, setSwitchToggle] = useState<boolean>(true)
    const [status, setStatus] = useState<string>("")


    /**
     * Fonction qui permet de changer le state du status via le toggle
     * @param event
     */
    const handleClickDispo = (event : any) => {

        if (switchToggle == true) {
            setStatus("Loué")
        } else if (switchToggle == false) {
            setStatus("Disponible")
        }
        setSwitchToggle(!switchToggle)
    }


    /**
     * UseEffect de base
     */
    useEffect(() => {
        callVehiculeService.findAll().then(res => setVehiculeList(res))
    }, [])

    /**
     * UseEffect qui utilise la fonction de recherche par status du back
     */
    useEffect(() => {
        callVehiculeService.findVehiculeByStatus(status).then(res => setVehiculeList(res))
    }, [switchToggle])

    /**
     * Fonction qui permet d'ajouter un vehicule
     */
    const handleClickAdd = () => {
        callVehiculeService.addVehicule(newVehicule)
    }

    /**
     * Fonction qui permet de supprimer un véhicule
     * @param id
     */
    const handleClickDelete = (id : string) => {
        callVehiculeService.deleteVehicule(id)
    }




    /**
     * Fonction permettant de set la marque pour un nouveau véhicule
     * @param event
     */
    const handleChangeMarque = (event : any) => {
        setNewVehicule({...newVehicule, marque:event.target.value})
    }

    /**
     * Fonction permettant de set le modèle pour un nouveau véhicule
     * @param event
     */
    const handleChangeModele = (event : any) => {
        setNewVehicule({...newVehicule, modele:event.target.value})
    }

    /**
     * Fonction permettant de set l'immatriculation pour un nouveau véhicule
     * @param event
     */
    const handleChangeImma = (event : any) => {
        setNewVehicule({...newVehicule, immatriculation:event.target.value})
    }

    /**
     * Fonction permettant de set le type (ex : voiture, moto,...) pour un nouveau véhicule
     * @param event
     */
    const handleChangeType = (event : any) => {
        setNewVehicule({...newVehicule, type:event.target.value})
    }

    /**
     * Fonction permettant de set le prix pour un nouveau véhicule
     * @param event
     */
    const handleChangePrix = (event : any) => {
        setNewVehicule({...newVehicule, prix:event.target.value})
    }

    /**
     * Fonction permettant de set l'etat pour un nouveau véhicule
     * @param event
     */
    const handleChangeEtat = (event : any) => {
        setNewVehicule({...newVehicule, etat:event.target.value})
    }

    /**
     * Fonction permettant de set le status (ex : Disponible ou Loué) pour un nouveau véhicule
     * @param event
     */
    const handleChangeStatus = (event : any) => {
        setNewVehicule({...newVehicule, status:event.target.value})
    }






    return (
        <>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Liste des véhicules</IonCardTitle>
                    <IonCardSubtitle></IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>

                    {/* Bouton d'ajout d'un véhicule relié à une modal par son id */}
                    <IonButton id="open-modal" color="secondary" expand="block" size="large">Ajouter un véhicule</IonButton>
                    {/* Modal contenant le formulaire d'ajout de véhicule */}
                    <IonModal
                        trigger="open-modal"
                        initialBreakpoint={0.90}
                        breakpoints={[0, 0.25, 0.5, 0.75]}
                        handleBehavior="cycle"
                    >
                        <IonContent className="ion-padding">
                            <div className="ion-margin-top">
                                <IonItem fill="outline">
                                    <IonLabel position="floating">Marque du véhicule</IonLabel>
                                    <IonInput onIonChange={handleChangeMarque} placeholder="ex : Peugeot"></IonInput>
                                </IonItem>
                                <IonItem className="inputVehicule" fill="outline">
                                    <IonLabel position="floating">Modele du véhicule</IonLabel>
                                    <IonInput onIonChange={handleChangeModele} placeholder="ex : 308"></IonInput>
                                </IonItem>
                                <IonItem className="inputVehicule" fill="outline">
                                    <IonLabel position="floating">Immatriculation du véhicule</IonLabel>
                                    <IonInput onIonChange={handleChangeImma} placeholder="ex : XX-000-XX"></IonInput>
                                </IonItem>
                                <IonItem className="inputVehicule" fill="outline">
                                    <IonLabel position="floating">Type de véhicule</IonLabel>
                                    <IonInput onIonChange={handleChangeType} placeholder="ex : Voiture"></IonInput>
                                </IonItem>
                                <IonItem className="inputVehicule" fill="outline">
                                    <IonLabel position="floating">Prix du véhicule</IonLabel>
                                    <IonInput type="number" onIonChange={handleChangePrix} placeholder="ex : 120"></IonInput>
                                </IonItem>
                                <IonItem className="inputVehicule" fill="outline">
                                    <IonLabel position="floating">Etat du véhicule</IonLabel>
                                    <IonInput onIonChange={handleChangeEtat} placeholder="ex : A, B, C ou D"></IonInput>
                                </IonItem>
                                <IonItem className="inputVehicule" fill="outline">
                                    <IonLabel position="floating">Status du véhicule</IonLabel>
                                    <IonInput onIonChange={handleChangeStatus} placeholder="ex : Disponible ou loué"></IonInput>
                                </IonItem>
                                <IonButton onClick={handleClickAdd} color="success" className="btnValider" expand="block" size="large">Valider</IonButton>
                            </div>
                        </IonContent>
                    </IonModal>
                    <div className="toggle">
                        <IonLabel>Loué</IonLabel>
                        <IonToggle checked={switchToggle} onIonChange={handleClickDispo}></IonToggle>
                        <IonLabel>Disponible</IonLabel>
                    </div>
                    <IonList>
                        {vehiculeList.map((i, index) =>

                            // Première partie du composant permettant de slider l'item de la liste
                            // pour acceder aux menus
                            <IonItemSliding key={index}>
                                <IonItemOptions side="start">
                                    <IonItemOption routerLink={`/vehicules/${i.id}`} color="success">
                                        <IonIcon slot="end" icon={imageSharp}></IonIcon>
                                        Détails
                                    </IonItemOption>
                                </IonItemOptions>

                                {/* Composant de la liste */}
                                <IonItem>
                                    <IonThumbnail slot="start">
                                        <img alt="Silhouette of mountains"
                                             src="https://ionicframework.com/docs/img/demos/thumbnail.svg"/>
                                    </IonThumbnail>
                                    <IonLabel>{i.marque} {i.modele}</IonLabel>
                                </IonItem>
                                {/* Fin du composant de la liste */}

                                {/* 2ème partie du composant permettant de slider l'item de la liste  */}
                                <IonItemOptions>

                                    <IonItemOption onClick={() => handleClickDelete(i.id)} color="danger">
                                        <IonIcon slot="end" icon={trash}></IonIcon>
                                        Supprimer
                                    </IonItemOption>
                                </IonItemOptions>
                            </IonItemSliding>
                            // Fin du composant permettant de slider l'item de la liste
                        )}

                    </IonList>

                </IonCardContent>
            </IonCard>
        </>
    )
}

export default VehiculeList