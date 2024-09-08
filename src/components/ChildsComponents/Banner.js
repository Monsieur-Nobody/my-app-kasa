
import PropTypes from 'prop-types';

const Banner = ({ imageSrc, text, altText, bannerClass }) => {
    return (
      <div className={`banner ${bannerClass}`}>
        <img src={imageSrc} alt={altText} className="banner-image" />
        {text && <div className="banner-text">{text}</div>}
      </div>
    );
  };


  Banner.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    text: PropTypes.string,
    altText: PropTypes.string,
    bannerClass: PropTypes.string,
  };
  
  Banner.defaultProps = {
    text: '',
    altText: 'Banner image',
    bannerClass: '', 
  };
  
  export default Banner;