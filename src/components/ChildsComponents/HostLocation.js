import accommodationData from '../../data/accommodation.json';

const HostLocation = ({ id }) => {
  // Trouver le logement correspondant à l'ID
  const accommodation = accommodationData.find(acc => acc.id === id);

  // Si le logement n'est pas trouvé, retourner null ou un message d'erreur
  if (!accommodation) {
    return null; // ou return <p>Hôte non trouvé</p>;
  }

  const { host } = accommodation;

  return (
    <div className="host-location">
      <p className="host-name">{host.name}</p>
      <img 
        src={host.picture} 
        alt={`Photo de ${host.name}`} 
        className="host-picture"
      />
    </div>
  );
};

export default HostLocation;