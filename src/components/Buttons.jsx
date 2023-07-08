import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitterSquare,
  faTumblrSquare,
} from '@fortawesome/free-brands-svg-icons';
import '../index.css';

const Buttons = ({ newQuoteHandler, tweetHandler, tumblrHandler }) => {
  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="btn-group" role="group" aria-label="Social Buttons">
          <button
            id="tweet-quote"
            className="rounded-start-4 my-button"
            onClick={tweetHandler}
          >
            <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
          </button>
          <button className="rounded-end-4 my-button" onClick={tumblrHandler}>
            <FontAwesomeIcon icon={faTumblrSquare} size="2x" />
          </button>
        </div>
      </div>

      <div className="col-lg-8 d-flex justify-content-end">
        <button
          id="new-quote"
          className="rounded-4 my-button"
          onClick={newQuoteHandler}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default Buttons;
