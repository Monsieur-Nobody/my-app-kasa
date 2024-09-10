import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Slider = ({ images }) => {
    // State pour suivre l'index de l'image courante
    const [currentIndex, setCurrentIndex] = useState(0);

    // Gestion de la navigation vers l'image précédente
    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    // Gestion de la navigation vers l'image suivante
    const nextSlide = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    // Ne pas afficher les flèches si une seule image
    if (images.length === 1) {
        return (
            <div className="slider">
                <img src={images[0]} alt="slider" className="slider-image" />
                <div className="image-counter">
                    1 / 1
                </div>
            </div>
        );
    }

    return (
        <div className="slider">
            <FontAwesomeIcon
                icon={faChevronLeft}
                onClick={prevSlide}
                className="slider-arrow left"
            />
            <img
                src={images[currentIndex]}
                alt={`slide ${currentIndex + 1}`}
                className="slider-image"
            />
            <FontAwesomeIcon
                icon={faChevronRight}
                onClick={nextSlide}
                className="slider-arrow right"
            />
            <div className="image-counter">
                {currentIndex + 1}/{images.length}
            </div>
        </div>
    );
};

export default Slider;
