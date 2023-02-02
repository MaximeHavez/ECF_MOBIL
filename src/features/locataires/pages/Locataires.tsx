import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../../components/ExploreContainer';
import './Locataires.css';
import PageCore from "../../../core/PageCore";
import LocataireList from "../layouts/LocataireList";

const Locataires: React.FC = () => {
  return (
        <>
            <PageCore title={"Locataires"}>
                <LocataireList/>
            </PageCore>
        </>
  );
};

export default Locataires;
