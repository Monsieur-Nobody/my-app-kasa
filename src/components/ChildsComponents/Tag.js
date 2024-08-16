import accommodationData from '../../data/accommodation.json'
const Tag = ({ id }) => {
    const accommodation = accommodationData.find(acc => acc.id === id);
  
    if (!accommodation || !accommodation.tags) {
      return null;
    }
  
    return (
      <div className="tags-container">
        {accommodation.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    );
  };
  
  export default Tag;