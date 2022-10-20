// Import
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './card.scss';

function Card({
  title, text, button, slug,
}) {
  console.log(slug);
  return (
    <div className={`card__${slug}`}>
      <div className="card-inner">
        <div className="card-front">
          <div className="card-content">
            <h3 className="card-title">
              {title}
            </h3>
          </div>
        </div>
        <div className="card-back">
          <div className="card-content ">
            <h4 className="card-text  ">
              {text}
            </h4>
            <Link to={`/${slug}`}>
              <button className="card__button " type="button">
                {button}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

// Export
export default Card;
