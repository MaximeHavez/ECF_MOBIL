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
import {archive, heart, trash} from "ionicons/icons";

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
                                  <IonItemOption color="success">
                                      <IonIcon slot="end" icon={archive}></IonIcon>
                                      Archive
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