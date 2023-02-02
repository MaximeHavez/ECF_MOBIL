import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding,
    IonLabel,
    IonList,
    IonThumbnail
} from "@ionic/react";
import locataires from "../pages/Locataires";
import {useEffect, useState} from "react";
import Locataires from "../pages/Locataires";
import {LocataireType} from "../models/LocataireType";
import {callVehiculeService} from "../../vehicules/services/VehiculeService";
import {callLocataireService} from "../services/LocataireServices";
import {archive, heart, imageSharp, trash} from "ionicons/icons";
import {useParams} from "react-router";

const LocataireList = () => {



    const [locataires, setLocataires] = useState<LocataireType[]>([])

    useEffect(() => {
        callLocataireService.findAll().then(res => setLocataires(res))
    }, [])


  return (
      <>
          <IonCard>
              <IonCardHeader>
                  <IonCardTitle>Liste des locataires</IonCardTitle>
                  <IonCardSubtitle></IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                  <IonList>

                      {locataires.map((i, index) =>

                          <IonItemSliding key={index}>
                              <IonItemOptions side="start">
                                  <IonItemOption routerLink={`/locataires/${i.id}`} color="success">
                                      <IonIcon slot="end" icon={imageSharp}></IonIcon>
                                      Détails
                                  </IonItemOption>
                              </IonItemOptions>

                          <IonItem>
                              <IonThumbnail slot="start">
                                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                              </IonThumbnail>
                              <IonLabel>{i.nom} {i.prenom}</IonLabel>
                          </IonItem>

                              <IonItemOptions>
                                  <IonItemOption>
                                      <IonIcon slot="end" icon={heart}></IonIcon>
                                      Favorite
                                  </IonItemOption>
                                  <IonItemOption color="danger">
                                      <IonIcon slot="end" icon={trash}></IonIcon>
                                      Delete
                                  </IonItemOption>
                              </IonItemOptions>
                          </IonItemSliding>
                      )}


                  </IonList>
              </IonCardContent>
          </IonCard>
      </>
  )
}

export default LocataireList