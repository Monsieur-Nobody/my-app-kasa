const Rating = ({ rating }) => {
    // Créer un tableau pour représenter les étoiles pleines
    const filledStars = Array.from({ length: rating }, (_, index) => '★').join('');
    // Créer un tableau pour représenter les étoiles vides
    const emptyStars = Array.from({ length: 5 - rating }, (_, index) => '☆').join('');

    return (
        <div className="rating">
            <span className="rating-stars">{filledStars}{emptyStars}</span>
        </div>
    );
};

export default Rating;