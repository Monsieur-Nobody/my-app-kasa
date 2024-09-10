const Tag = ({ tags }) => {
  if (!tags || tags.length === 0) {
      return null; // Retourne null si aucun tag n'est fourni ou si la liste est vide
  }

  return (
      <div className="tags-container">
          {tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
          ))}
      </div>
  );
};

export default Tag;