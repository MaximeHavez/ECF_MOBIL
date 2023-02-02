import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {carSportSharp, clipboardSharp, ellipse, peopleSharp, square, triangle} from 'ionicons/icons';
import Vehicules from './features/vehicules/pages/Vehicules';
import Locations from './features/locations/pages/Locations';
import Locataires from './features/locataires/pages/Locataires';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import VehiculeCard from "./features/vehicules/components/VehiculeCard";
import LocataireCard from "./features/locataires/components/LocataireCard";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/vehicules">
            <Vehicules />
          </Route>
          <Route exact path="/locations">
            <Locations />
          </Route>
          <Route path="/locataires">
            <Locataires />
          </Route>
          <Route exact path="/">
            <Redirect to="/vehicules" />
          </Route>
          <Route path="/vehicules/:id" component={VehiculeCard}/>
          <Route path="/locataires/:id" component={LocataireCard}/>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="vehicules" href="/vehicules">
            <IonIcon icon={carSportSharp} />
            <IonLabel>Vehicules</IonLabel>
          </IonTabButton>
          <IonTabButton tab="locations" href="/locations">
            <IonIcon icon={clipboardSharp} />
            <IonLabel>Locations</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/locataires">
            <IonIcon icon={peopleSharp} />
            <IonLabel>Locataires</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
