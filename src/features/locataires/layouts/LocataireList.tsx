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
    const [newLocataire, setNewLocataire] = useState<LocataireType>(new LocataireType("","","",""))

    useEffect(() => {
        callLocataireService.findAll().then(res => setLocataires(res))
    }, [])

    const handleChangePrenom = (event : any) => {
        setNewLocataire({...newLocataire, prenom:event.target.value})
    }

    const handleChangeNom = (event : any) => {
        setNewLocataire({...newLocataire, nom:event.target.value})
    }

    const handleChangeEmail = (event : any) => {
        setNewLocataire({...newLocataire, email:event.target.value})
    }

    const handleChangeMdp = (event : any) => {
        setNewLocataire({...newLocataire, motDePasse:event.target.value})
    }

    const handleClickAdd = () => {
        callLocataireService.addUser(newLocataire)
    }

    const handleClickDelete = (id : string) => {
        callLocataireService.deleteUser(id)
    }

  return (
      <>
          <IonCard>
              <IonCardHeader>
                  <IonCardTitle>Liste des locataires</IonCardTitle>
                  <IonCardSubtitle></IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>

                  {/* Bouton d'ajout d'un véhicule relié à une modal par son id */}
                  <IonButton id="open-modal2" color="secondary" expand="block" size="large">Ajouter un locataire</IonButton>
                  {/* Modal contenant le formulaire d'ajout de véhicule */}
                  <IonModal
                      trigger="open-modal2"
                      initialBreakpoint={0.90}
                      breakpoints={[0, 0.25, 0.5, 0.75]}
                      handleBehavior="cycle"
                  >
                      <IonContent className="ion-padding">
                          <div className="ion-margin-top">
                              <IonItem fill="outline">
                                  <IonLabel position="floating">Nom du locataire</IonLabel>
                                  <IonInput onIonChange={handleChangeNom} placeholder="Nom"></IonInput>
                              </IonItem>
                              <IonItem className="inputVehicule" fill="outline">
                                  <IonLabel position="floating">Prénom du locataire</IonLabel>
                                  <IonInput onIonChange={handleChangePrenom} placeholder="Prenom"></IonInput>
                              </IonItem>
                              <IonItem className="inputVehicule" fill="outline">
                                  <IonLabel position="floating">Email du locataire</IonLabel>
                                  <IonInput onIonChange={handleChangeEmail} placeholder="Email"></IonInput>
                              </IonItem>
                              <IonItem className="inputVehicule" fill="outline">
                                  <IonLabel position="floating">Mot de passe</IonLabel>
                                  <IonInput onIonChange={handleChangeMdp} placeholder="Mot de passe"></IonInput>
                              </IonItem>

                              <IonButton onClick={handleClickAdd} color="success" className="btnValider" expand="block" size="large">Valider</IonButton>
                          </div>
                      </IonContent>
                  </IonModal>

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

                                  <IonItemOption onClick={() => handleClickDelete(i.id)} color="danger">
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