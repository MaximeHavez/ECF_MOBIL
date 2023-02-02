import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from "@ionic/react";
import PageCore from "../../../core/PageCore";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {callLocataireService} from "../services/LocataireServices";
import {LocataireType} from "../models/LocataireType";
import locataires from "../pages/Locataires";

const LocataireCard = () => {

    const {id} = useParams() as {id : string}

    const [locataire, setLocataire] = useState<LocataireType>(new LocataireType("","","",""))

    useEffect(() => {
        callLocataireService.findUserById(id).then(res => setLocataire(res))
    })

  return (
      <>

          <PageCore title={`Détails de l'utilisateur`}>
          <IonCard>
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              <IonCardHeader>
                  <IonCardTitle>{locataire.nom} {locataire.prenom}</IonCardTitle>
                  <IonCardSubtitle>{locataire.email}</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                  {locataire.id}
              </IonCardContent>
          </IonCard>
          </PageCore>
      </>
  )
}

export default LocataireCard