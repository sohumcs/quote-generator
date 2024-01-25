import { useState } from "react";

const quoteData = [
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  { text: "Get busy living or get busy dying.", author: "Stephen King" },
  {
    text: "You only live once, but if you do it right, once is enough.",
    author: "Mae West"
  },
  {
    text:
      "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison"
  },
  {
    text:
      "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein"
  },
  {
    text: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth"
  },
  {
    text:
      "Money and success don’t change people; they merely amplify what is already there.",
    author: "Will Smith"
  },
  {
    text:
      "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
    author: "Steve Jobs"
  },
  {
    text: "Not how long, but how well you have lived is the main thing.",
    author: "Seneca"
  },
  {
    text:
      "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    text:
      "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.",
    author: "Henry Ford"
  },
  {
    text: "In order to write about life first you must live it.",
    author: "Ernest Hemingway"
  },
  {
    text:
      "The big lesson in life, baby, is never be scared of anyone or anything.",
    author: "Frank Sinatra"
  },
  {
    text:
      "Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.",
    author: "Attributed to various sources"
  },
  {
    text:
      "Curiosity about life in all of its aspects, I think, is still the secret of great creative people.",
    author: "Leo Burnett"
  },
  {
    text:
      "Life is not a problem to be solved, but a reality to be experienced.",
    author: "Soren Kierkegaard"
  },
  { text: "The unexamined life is not worth living.", author: "Socrates" },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  {
    text:
      "The way I see it, if you want the rainbow, you gotta put up with the rain.",
    author: "Dolly Parton"
  },
  {
    text:
      "Do all the good you can, for all the people you can, in all the ways you can, as long as you can.",
    author: "Hillary Clinton (inspired by John Wesley quote)"
  },
  {
    text:
      "Don’t settle for what life gives you; make life better and build something.",
    author: "Ashton Kutcher"
  },
  {
    text:
      "Everybody wants to be famous, but nobody wants to do the work. I live by that. You grind hard so you can play hard. At the end of the day, you put all the work in, and eventually it’ll pay off. It could be in a year, it could be in 30 years. Eventually, your hard work will pay off.",
    author: "Kevin Hart"
  },
  {
    text:
      "Everything negative – pressure, challenges – is all an opportunity for me to rise.",
    author: "Kobe Bryant"
  },
  { text: "I like criticism. It makes you strong.", author: "LeBron James" },
  {
    text: "You never really learn much from hearing yourself speak.",
    author: "George Clooney"
  },
  {
    text:
      "Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this.",
    author: "Celine Dion"
  },
  {
    text:
      "Life is never easy. There is work to be done and obligations to be met – obligations to truth, to justice, and to liberty.",
    author: "John F. Kennedy (JFK Quotes)"
  },
  { text: "Live for each second without hesitation.", author: "Elton John" },
  {
    text:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein"
  },
  {
    text: "Life is really simple, but men insist on making it complicated.",
    author: "Confucius"
  },
  {
    text:
      "Life is a succession of lessons which must be lived to be understood.",
    author: "Helen Keller"
  },
  {
    text:
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
    author: "Steve Jobs"
  },
  { text: "hey pretty!", author: "Pratu" },
  {
    text:
      "My mama always said, life is like a box of chocolates. You never know what you're gonna get.",
    author: "Forrest Gump"
  },
  {
    text:
      "Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny.",
    author: "Lao-Tze"
  },
  {
    text:
      "When we do the best we can, we never know what miracle is wrought in our life or the life of another.",
    author: "Helen Keller"
  },
  { text: "The healthiest response to life is joy.", author: "Deepak Chopra" },
  {
    text:
      "Life is like a coin. You can spend it any way you wish, but you only spend it once.",
    author: "Lillian Dickson"
  },
  {
    text:
      "The best portion of a good man's life is his little nameless, unencumbered acts of kindness and of love.",
    author: "Wordsworth"
  },
  {
    text:
      "In three words I can sum up everything I've learned about life: It goes on.",
    author: "Robert Frost"
  },
  {
    text:
      "Life is ten percent what happens to you and ninety percent how you respond to it.",
    author: "Charles Swindoll"
  },
  { text: "Keep calm and carry on.", author: "Winston Churchill" },
  {
    text: "Maybe that’s what life is… a wink of the eye and winking stars.",
    author: "Jack Kerouac"
  },
  {
    text: "Life is a flower of which love is the honey.",
    author: "Victor Hugo"
  },
  {
    text:
      "Keep smiling, because life is a beautiful thing and there’s so much to smile about.",
    author: "Marilyn Monroe"
  },
  {
    text:
      "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.",
    author: "Buddha"
  },
  {
    text:
      "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    author: "Dr. Seuss"
  },
  {
    text:
      "Good friends, good books, and a sleepy conscience: this is the ideal life.",
    author: "Mark Twain"
  },
  {
    text: "Life would be tragic if it weren’t funny.",
    author: "Stephen Hawking"
  },
  {
    text: "Live in the sunshine, swim the sea, drink the wild air.",
    author: "Ralph Waldo Emerson"
  }
];

const getRandomIndex = () => Math.round(Math.random() * (quoteData.length - 1 - 0) + 0);

const getRandomColor = () => "#" + ((1 << 24) * Math.random() | 0).toString(16);

const App = () => {
  const [quote, setQuote] = useState(quoteData[getRandomIndex()]);
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());

  const handleNewQuote = () => {
    setQuote(quoteData[getRandomIndex()]);
    setBackgroundColor(getRandomColor());
  };

  return (
    <div className="main" style={{ backgroundColor }}>
      <h1>Sohum's Quote Generator</h1>
      <div id="quote-box">
        <p id="text">{quote.text}</p>
        <h2 id="author">{quote.author}</h2>
        <div className="actions">
          <button id="new-quote" className="button" onClick={handleNewQuote} style={{ backgroundColor }}>
            New Quote
          </button>
          <a
            href="https://twitter.com/intent/tweet"
            id="tweet-quote"
            target="_blank"
            style={{ backgroundColor }}
          >
            Tweet
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;