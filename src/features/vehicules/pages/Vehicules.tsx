import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../../components/ExploreContainer';
import './Vehicules.css';
import PageCore from "../../../core/PageCore";
import VehiculeList from "../layouts/VehiculeList";

const Vehicules: React.FC = () => {
  return (
        <>
            <PageCore title={"Vehicules"}>
                <VehiculeList/>
            </PageCore>
        </>
  );
};

export default Vehicules;
