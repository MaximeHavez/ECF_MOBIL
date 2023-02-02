import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonIcon, IonInput,
    IonItem, IonLabel, IonModal
} from "@ionic/react";
import PageCore from "../../../core/PageCore";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {callLocataireService} from "../services/LocataireServices";
import {LocataireType} from "../models/LocataireType";
import locataires from "../pages/Locataires";
import locataireList from "../layouts/LocataireList";
import {pencil} from "ionicons/icons";

const LocataireCard = () => {

    const {id} = useParams() as {id : string}

    const [locataire, setLocataire] = useState<LocataireType>(new LocataireType("","","",""))

    useEffect(() => {
        callLocataireService.findUserById(id).then(res => setLocataire(res))
    }, [])

    const handleClickModif = (id : string) => {
        callLocataireService.updateUser(id, locataire)
    }

    const handleChangePrenom = (event : any) => {
        setLocataire({...locataire, prenom:event.target.value})
    }

    const handleChangeNom = (event : any) => {
        setLocataire({...locataire, nom:event.target.value})
    }

    const handleChangeEmail = (event : any) => {
        setLocataire({...locataire, email:event.target.value})
    }

    const handleChangeMdp = (event : any) => {
        setLocataire({...locataire, motDePasse:event.target.value})
    }

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
                          <IonLabel position="floating">Nom</IonLabel>
                          <IonInput onIonChange={handleChangeNom} placeholder={locataire.nom}></IonInput>
                      </IonItem>
                      <IonItem className="inputVehicule" fill="outline">
                          <IonLabel position="floating">Prénom</IonLabel>
                          <IonInput onIonChange={handleChangePrenom} placeholder={locataire.prenom}></IonInput>
                      </IonItem>
                      <IonItem className="inputVehicule" fill="outline">
                          <IonLabel position="floating">Email</IonLabel>
                          <IonInput onIonChange={handleChangeEmail} placeholder={locataire.email}></IonInput>
                      </IonItem>
                      <IonItem className="inputVehicule" fill="outline">
                          <IonLabel position="floating">Mot de passe</IonLabel>
                          <IonInput onIonChange={handleChangeMdp} placeholder={locataire.motDePasse}></IonInput>
                      </IonItem>

                      <IonButton onClick={() => handleClickModif(locataire.id)} color="success" className="btnValider" expand="block" size="large">Valider</IonButton>
                  </div>
              </IonModal>
          </PageCore>
      </>
  )
}

export default LocataireCard