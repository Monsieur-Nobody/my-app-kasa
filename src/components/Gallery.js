import Thumb from './Thumb';
import accommodationData from '../data/accommodation.json';

const Gallery = () => {
  return (
    <div className="Gallery">
      {accommodationData.map((accommodation) => (
        <Thumb 
          key={accommodation.id}
          id={accommodation.id}
          title={accommodation.title}
          cover={accommodation.cover}
        />
      ))}
    </div>
  );
};

export default Gallery;