import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../../components/ExploreContainer';
import './Locations.css';
import PageCore from "../../../core/PageCore";
import LocationsList from "../layouts/LocationsList";

const Locations: React.FC = () => {
  return (
    <>
        <PageCore title={"Locations"}>
            <LocationsList/>
        </PageCore>
    </>
  );
};

export default Locations;
