import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle, IonContent, IonInput,
    IonItem, IonLabel,
    IonList, IonModal, IonSelect, IonSelectOption,
    IonThumbnail
} from "@ionic/react";
import {useEffect, useState} from "react";
import {LocationType} from "../models/LocationType";
import {callLocationService} from "../services/LocationServices";
import {LocataireType} from "../../locataires/models/LocataireType";
import {VehiculeType} from "../../vehicules/models/VehiculeType";
import {callLocataireService} from "../../locataires/services/LocataireServices";
import {callVehiculeService} from "../../vehicules/services/VehiculeService";

const LocationsList = () => {


    const [locationList, setLocationList] = useState<LocationType[]>([])
    const [newLocation, setNewLocation] = useState<LocationType>(new LocationType("", "", 0,
                                                                new LocataireType("","", "", ""),
                                                                new VehiculeType("", "", "", "",0,"","")))
    const [locataireList, setLocataireList] = useState<LocataireType[]>([])
    const [vehiculeList, setVehiculeList] = useState<VehiculeType[]>([])

    useEffect(() => {
        callLocationService.findAll().then(res => setLocationList(res))
    }, [])

    useEffect(() => {
        callLocataireService.findAll().then(res => setLocataireList(res))
    })

    useEffect(()=> {
        callVehiculeService.findAll().then(res => setVehiculeList(res))
    })

    const handleChangeDateDebut = (event : any) => {
        setNewLocation({...newLocation, dateDebut:event.target.value})
    }

    const handleChangeDateFin = (event : any) => {
        setNewLocation({...newLocation, dateFin:event.target.value})
    }

    const handleChangeLocataire = () => {
        // setNewLocation({...newLocation, locataire:event.target.value})
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

                  <IonButton id="open-modal3" color="secondary" expand="block" size="large">Créer une location</IonButton>
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
                              <IonList>
                                  <IonItem>
                                      <IonSelect placeholder="Selectionner un locataire" multiple={true}>

                                          {locataireList.map((i , index) =>
                                              <IonSelectOption key={index} value="apples">{i.nom} {i.prenom}</IonSelectOption>
                                          )}

                                      </IonSelect>
                                  </IonItem>
                                  <IonItem>
                                      <IonSelect placeholder="Selectionner un locataire" multiple={true}>

                                          {vehiculeList.map((i , index) =>
                                              <IonSelectOption key={index} value="apples">{i.marque} {i.modele}</IonSelectOption>
                                          )}

                                      </IonSelect>
                                  </IonItem>


                          </IonList>
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