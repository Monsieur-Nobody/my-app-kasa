const HostLocation = ({ host }) => {
  if (!host) {
      return <p>Hôte non trouvé</p>; // ou vous pouvez choisir de ne rien afficher
  }

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