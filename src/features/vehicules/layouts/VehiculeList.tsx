import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle, IonContent, IonIcon, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding,
    IonLabel,
    IonList, IonModal,
    IonThumbnail
} from "@ionic/react";
import {useEffect, useState} from "react";
import {VehiculeType} from "../models/VehiculeType";
import {callVehiculeService} from "../services/VehiculeService";
import {archive, heart, imageSharp, pencil, trash} from "ionicons/icons";
import {useParams} from "react-router";

const VehiculeList = () => {

    const [vehiculeList, setVehiculeList] = useState<VehiculeType[]>([])

    const [newVehicule, setNewVehicule] = useState<VehiculeType>(new VehiculeType("","","","",0, "",""))

    useEffect(() => {
        callVehiculeService.findAll().then(res => setVehiculeList(res))
    }, [])

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

    const handleClickAdd = () => {
        callVehiculeService.addVehicule(newVehicule)
    }

    const handleClickDelete = (id : string) => {
        callVehiculeService.deleteVehicule(id)
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
                                    <IonItemOption color="warning">
                                        <IonIcon slot="end" icon={pencil}></IonIcon>
                                        Modifier
                                    </IonItemOption>
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