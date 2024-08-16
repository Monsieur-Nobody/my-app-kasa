import accommodationData from '../../data/accommodation.json'
import TitleLocation from '../ChildsComponents/TitleLocation';
import HostLocation from '../ChildsComponents/HostLocation';
import Tag from '../ChildsComponents/Tag';
import Rating from '../ChildsComponents/Rating';
import Collapse from '../ChildsComponents/Collapse';


const ContentLocation = ({ id }) => {
    // Récupérer les données du logement une seule fois
    const accommodation = accommodationData.find(acc => acc.id === id);

    // Si aucun logement n'est trouvé, vous pouvez retourner un message d'erreur ou null
    if (!accommodation) {
        return <div>Logement non trouvé</div>;
    }

    return (
        <div className="content-location">
            <TitleLocation title={accommodation.title} location={accommodation.location} />
            <HostLocation host={accommodation.host} />
            <Tag tags={accommodation.tags} />
            <Rating rating={accommodation.rating} />
            <Collapse title="Description" content={accommodation.description} />
            <Collapse title="Équipements" content={accommodation.equipments} />
        </div>
    );
};

export default ContentLocation;