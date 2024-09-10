import { useParams } from 'react-router-dom';
import Slider from '../components/Slider';
import ContentLocation from '../components/ContentLocation';
import NotFoundPage from './NotFoundPage';
import accommodationData from '../data/accommodation.json';

const LocationPage = () => {
    const { id } = useParams(); // Récupération de l'ID à partir de l'URL
    const accommodation = accommodationData.find(acc => acc.id === id); // Trouver l'annonce correspondante

    if (!accommodation) {
        return <NotFoundPage />; // Utiliser le composant NotFoundPage si l'annonce n'est pas trouvée
    }

    return (
        <div className="location-page">
            <Slider images={accommodation.pictures} />  
            <ContentLocation accommodation={accommodation} />  
        </div>
    );
}

export default LocationPage;