import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ImageSlider = ({ images }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        adaptiveHeight: true,
        arrows:true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    function NextArrow(props) {
        const { onClick } = props;
        return (
            <div className="slick-arrow slick-next" onClick={onClick}>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        );
    }

    function PrevArrow(props) {
        const { onClick } = props;
        return (
            <div className="slick-arrow slick-prev" onClick={onClick}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
        );
    }

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="slider-image-container">
                        <img src={image} alt={`Slide ${index + 1}`} />
                        <div className="image-counter">{index + 1} / {images.length}</div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;
