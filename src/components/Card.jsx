import PropTypes from 'prop-types'; 

function Card({ imageSrc, imageAlt, title, description }) {
  return (
    <div className="bg-among-space rounded-lg overflow-hidden shadow-lg">
      <img 
        src={imageSrc} 
        alt={imageAlt || 'Card image'} 
        className="w-full h-48 object-cover"
        loading="lazy" 
      />
      <div className="p-6">
        <h2 className="heading-3 mb-2 text-white">{title}</h2>
        <p className="body-normal text-gray-300 mb-4">
          {description}
        </p>
        <button 
          className="among-button"
          type="button"
          aria-label="Learn more" 
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

// Added default props
Card.defaultProps = {
  imageAlt: 'Card image',
};

export default Card;