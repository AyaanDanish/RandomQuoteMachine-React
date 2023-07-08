import { useEffect, useState } from 'react';
import Buttons from './components/Buttons';
import QuoteText from './components/QuoteText';
import axios from 'axios';
import './index.css';

const useQuoteData = () => {
  const [quotes, setQuote] = useState([]);
  const [authors, setAuthor] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const quoteData = await axios.get(
          'https://api.api-ninjas.com/v1/quotes',
          {
            params: {
              limit: 10,
            },
            headers: {
              'X-Api-Key': 'Vs7z/1vE0lpgSn3Oo0YdOQ==M91lbOSj4PufPQFO',
            },
          }
        );

        const quoteList = quoteData.data.map((item) => item.quote);
        setQuote(quoteList);

        const authorList = quoteData.data.map((item) => item.author);
        setAuthor(authorList);
      } catch (err) {
        console.log(err);
      }
    };

    fetchQuotes();
  }, []);

  return { quotes, authors };
};

const App = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(1);
  const { quotes, authors } = useQuoteData();

  const colorList = [
    '#0d6efd',
    '#6610f2',
    '#198754',
    '#d63384',
    '#dc3545',
    '#fd7e14',
    '#ffc107',
    '#dc143c',
    '#20c997',
    '#0dcaf0',
  ];

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--color-theme',
      colorList[colorIndex]
    );

    document.body.style.transition = 'background-color 1.5s';
    document.body.style.backgroundColor = colorList[colorIndex];
  }, [colorIndex]);

  const handleQuoteButton = () => {
    setColorIndex((prev) => (prev + 1) % colorList.length);
    setQuoteIndex((prev) => (prev + 1) % quotes.length);
  };

  const handleTweetButton = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      quotes[quoteIndex]
    )}&hashtags=${encodeURIComponent('RandomQuote')}`;
    window.open(tweetUrl);
  };

  const handleTumblrButton = () => {
    const tumblrUrl = `https://www.tumblr.com/new/text?title=${encodeURIComponent(
      'Sharing my random quote'
    )}&body=${encodeURIComponent(quotes[quoteIndex])}}`;
    window.open(tumblrUrl);
  };

  return (
    <div
      className="position-absolute top-50 start-50 translate-middle"
      style={{ maxWidth: '30%' }}
    >
      <div className="card rounded-5" style={{ border: '2px solid black' }}>
        <div className="card-body" id="quote-box">
          <QuoteText text={quotes[quoteIndex]} author={authors[quoteIndex]} />
          <Buttons
            newQuoteHandler={handleQuoteButton}
            tweetHandler={handleTweetButton}
            tumblrHandler={handleTumblrButton}
            colorTheme={colorList[colorIndex]}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
