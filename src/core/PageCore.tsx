import React from "react";
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";

export type props = {
    title: string
    children: any
}

const PageCore = (props : props) => {
  return(
      <>
          <IonPage>
              <IonHeader>
                  <IonToolbar>
                      <IonTitle>{props.title}</IonTitle>
                  </IonToolbar>
              </IonHeader>
              <IonContent fullscreen>

                  {props.children}

              </IonContent>
          </IonPage>
      </>
  )
}

export default PageCore