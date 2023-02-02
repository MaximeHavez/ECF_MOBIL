import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle, IonContent, IonInput,
    IonItem, IonLabel,
    IonList, IonModal,
    IonThumbnail
} from "@ionic/react";
import {useEffect, useState} from "react";
import {LocationType} from "../models/LocationType";
import {callLocationService} from "../services/LocationServices";
import {LocataireType} from "../../locataires/models/LocataireType";
import {VehiculeType} from "../../vehicules/models/VehiculeType";

const LocationsList = () => {


    const [locationList, setLocationList] = useState<LocationType[]>([])
    const [newLocation, setNewLocation] = useState<LocationType>(new LocationType("", "", 0,
                                                                new LocataireType("","", "", ""),
                                                                new VehiculeType("", "", "", "",0,"","")))

    useEffect(() => {
        callLocationService.findAll().then(res => setLocationList(res))
    }, [])

    const handleChangeDateDebut = () => {

    }

    const handleChangeDateFin = () => {

    }

    const handleChangeLocataire = () => {

    }

    const handleChangeVehicule = () => {

    }

    const handleClickAdd = () => {

    }

  return (
      <>
          <IonCard>
              <IonCardHeader>
                  <IonCardTitle>Liste des locations</IonCardTitle>
                  <IonCardSubtitle></IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>

                  <IonButton id="open-modal3" color="secondary" expand="block" size="large">Ajouter un véhicule</IonButton>
                  {/* Modal contenant le formulaire d'ajout de véhicule */}
                  <IonModal
                      trigger="open-modal3"
                      initialBreakpoint={0.90}
                      breakpoints={[0, 0.25, 0.5, 0.75]}
                      handleBehavior="cycle"
                  >
                      <IonContent className="ion-padding">
                          <div className="ion-margin-top">
                              <IonItem fill="outline">
                                  <IonLabel>Date de debut</IonLabel>
                                  <IonInput type="date" onIonChange={handleChangeDateDebut}></IonInput>
                              </IonItem>
                              <IonItem className="inputVehicule" fill="outline">
                                  <IonLabel>Date de fin</IonLabel>
                                  <IonInput type="date" onIonChange={handleChangeDateFin}></IonInput>
                              </IonItem>
                              <IonItem className="inputVehicule" fill="outline">
                                  <IonLabel>Locataire</IonLabel>
                                  <IonInput onIonChange={handleChangeLocataire}></IonInput>
                              </IonItem>
                              <IonItem className="inputVehicule" fill="outline">
                                  <IonLabel>Véhicule</IonLabel>
                                  <IonInput onIonChange={handleChangeVehicule}></IonInput>
                              </IonItem>

                              <IonButton onClick={handleClickAdd} color="success" className="btnValider" expand="block" size="large">Valider</IonButton>
                          </div>
                      </IonContent>
                  </IonModal>

                  <IonList>

                      {locationList.map((i, index) =>
                          <IonItem>
                              <IonThumbnail slot="start">
                                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                              </IonThumbnail>
                              <IonLabel>{i.id}</IonLabel>
                          </IonItem>
                      )}





                  </IonList>
              </IonCardContent>
          </IonCard>
      </>
  )
}

export default LocationsList