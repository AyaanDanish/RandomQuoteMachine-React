import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

const QuoteText = ({ text = '', author = '' }) => {
  const visible = !text && !author ? false : true;

  return (
    <>
      <h3
        className={visible ? 'card-title' : 'card-title placeholder-glow'}
        style={{ textAlign: 'center' }}
        key={text}
        id="text"
      >
        {visible ? (
          <>
            <FontAwesomeIcon icon={faQuoteLeft} className="my-icon" /> {text}{' '}
            <FontAwesomeIcon icon={faQuoteRight} className="my-icon" />
          </>
        ) : (
          <>
            <span className="placeholder col-7" />
            <span className="placeholder col-4" />
            <span className="placeholder col-4" />
            <span className="placeholder col-6" />
            <span className="placeholder col-8" />
            <span className="placeholder col-7" />
            <span className="placeholder col-4" />
          </>
        )}
      </h3>

      <p id="author" className="fs-4" style={{ textAlign: 'right' }}>
        {visible ? `- ${author}` : <span className="placeholder col-6" />}
      </p>
    </>
  );
};

export default QuoteText;
