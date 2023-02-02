import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon} from "@ionic/react";
import PageCore from "../../../core/PageCore";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {callVehiculeService} from "../services/VehiculeService";
import {VehiculeType} from "../models/VehiculeType";
import './VehiculeCard.css'
import {imageSharp, phoneLandscapeSharp} from "ionicons/icons";

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
          </PageCore>
      </>
  )
}

export default VehiculeCard