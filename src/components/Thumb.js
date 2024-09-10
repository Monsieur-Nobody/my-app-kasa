import { Link } from 'react-router-dom';

const Thumb = ({ id, title, cover }) => {
  return (
    <Link to={`/location/${id}`} className="Thumb">
      <div className="Thumb_Content">
        <img src={cover} alt={title} className="Thumb_Image" />
        <h2 className="Thumb_Title">{title}</h2>
      </div>
    </Link>
  );
};

export default Thumb;