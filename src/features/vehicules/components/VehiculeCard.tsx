import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle, IonContent,
    IonIcon, IonInput, IonItem,
    IonItemOption, IonLabel, IonModal
} from "@ionic/react";
import PageCore from "../../../core/PageCore";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {callVehiculeService} from "../services/VehiculeService";
import {VehiculeType} from "../models/VehiculeType";
import './VehiculeCard.css'
import {imageSharp, pencil, phoneLandscapeSharp} from "ionicons/icons";
import './VehiculeCard.css'

const VehiculeCard = () => {

    const {id} = useParams() as {id : string}

    const [vehicule, setVehicule] = useState<VehiculeType>(new VehiculeType("","","","",0,"",""))

    useEffect(() => {
        callVehiculeService.findVehiculeById(id).then(res => setVehicule(res))
    }, [])

    /**
     * Cette fonction permet d'attribuer un texte en fonction de la note de l'état
     */
    const etatVehicule = () => {
        switch (vehicule.etat) {
            case 'A' :
                return "Très Bon";
                break;
            case 'B' :
                return "Bon";
                break;
            case 'C' :
                return "Moyen";
                break;
            case 'D' :
                return "Mauvais";
                break;
        }
    }

    /**
     * Fonction permettant de set la marque pour un nouveau véhicule
     * @param event
     */
    const handleChangeMarque = (event : any) => {
        setVehicule({...vehicule, marque:event.target.value})
    }

    /**
     * Fonction permettant de set le modèle pour un nouveau véhicule
     * @param event
     */
    const handleChangeModele = (event : any) => {
        setVehicule({...vehicule, modele:event.target.value})
    }

    /**
     * Fonction permettant de set l'immatriculation pour un nouveau véhicule
     * @param event
     */
    const handleChangeImma = (event : any) => {
        setVehicule({...vehicule, immatriculation:event.target.value})
    }

    /**
     * Fonction permettant de set le type (ex : voiture, moto,...) pour un nouveau véhicule
     * @param event
     */
    const handleChangeType = (event : any) => {
        setVehicule({...vehicule, type:event.target.value})
    }

    /**
     * Fonction permettant de set le prix pour un nouveau véhicule
     * @param event
     */
    const handleChangePrix = (event : any) => {
        setVehicule({...vehicule, prix:event.target.value})
    }

    /**
     * Fonction permettant de set l'etat pour un nouveau véhicule
     * @param event
     */
    const handleChangeEtat = (event : any) => {
        setVehicule({...vehicule, etat:event.target.value})
    }

    /**
     * Fonction permettant de set le status (ex : Disponible ou Loué) pour un nouveau véhicule
     * @param event
     */
    const handleChangeStatus = (event : any) => {
        setVehicule({...vehicule, status:event.target.value})
    }

    /**
     * Fonction qui permet de supprimer un véhicule
     * @param id
     */
    const handleClickModif = (id : string) => {

        callVehiculeService.updateVehicule(vehicule, id)
    }

  return(
      <>
          <PageCore title={"Détail du véhicule"}>
              <IonCard>
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png"/>
                  <IonCardHeader>
                      <IonCardTitle>{vehicule.marque} {vehicule.modele}</IonCardTitle>
                      <IonCardSubtitle>{vehicule.status}</IonCardSubtitle>
                  </IonCardHeader>

                  <IonCardContent>

                      <div className="description">
                          <p> Immatriculation : <span className="imma">{vehicule.immatriculation}</span></p>
                          <p className="ligneDescri"> Prix journalier du véhicule : <span className="prix">{vehicule.prix} €</span></p>
                          <p>Etat du véhicule : {etatVehicule()}</p>
                      </div>
                  </IonCardContent>
              </IonCard>
              <IonButton id="modif" className="btnModif" expand="block" size="large"  color="warning">
                  <IonIcon slot="end" icon={pencil}></IonIcon>
                  Modifier
              </IonButton>
              <IonModal
                  trigger="modif"
                  initialBreakpoint={0.90}
                  breakpoints={[0, 0.25, 0.5, 0.75]}
                  handleBehavior="cycle"
              >
                      <div className="ion-margin-top">
                          <IonItem fill="outline">
                              <IonLabel position="floating">Marque du véhicule</IonLabel>
                              <IonInput onIonChange={handleChangeMarque} placeholder={vehicule.marque}></IonInput>
                          </IonItem>
                          <IonItem className="inputVehicule" fill="outline">
                              <IonLabel position="floating">Modele du véhicule</IonLabel>
                              <IonInput onIonChange={handleChangeModele} placeholder={vehicule.modele}></IonInput>
                          </IonItem>
                          <IonItem className="inputVehicule" fill="outline">
                              <IonLabel position="floating">Immatriculation du véhicule</IonLabel>
                              <IonInput onIonChange={handleChangeImma} placeholder={vehicule.immatriculation}></IonInput>
                          </IonItem>
                          <IonItem className="inputVehicule" fill="outline">
                              <IonLabel position="floating">Type de véhicule</IonLabel>
                              <IonInput onIonChange={handleChangeType} placeholder={vehicule.type}></IonInput>
                          </IonItem>
                          <IonItem className="inputVehicule" fill="outline">
                              <IonLabel position="floating">Prix du véhicule</IonLabel>
                              <IonInput type="number" onIonChange={handleChangePrix} placeholder={vehicule.prix.toString()}></IonInput>
                          </IonItem>
                          <IonItem className="inputVehicule" fill="outline">
                              <IonLabel position="floating">Etat du véhicule</IonLabel>
                              <IonInput onIonChange={handleChangeEtat} placeholder={vehicule.etat}></IonInput>
                          </IonItem>
                          <IonItem className="inputVehicule" fill="outline">
                              <IonLabel position="floating">Status du véhicule</IonLabel>
                              <IonInput onIonChange={handleChangeStatus} placeholder={vehicule.status}></IonInput>
                          </IonItem>
                          <IonButton onClick={() => handleClickModif(vehicule.id)} color="success" className="btnValider" expand="block" size="large">Valider</IonButton>
                      </div>
              </IonModal>
          </PageCore>
      </>
  )
}

export default VehiculeCard