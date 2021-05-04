import React, { useState, useEffect } from "react";
import "./Card.css";

const allQuotes = [
  {
    text: "Whether you think you can or you think you can’t, you’re right.",
    author: "Henry Ford",
  },

  {
    text: "No man was ever wise by chance.",
    author: "Seneca",
  },

  {
    text:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison",
  },

  {
    text: "Nothing happens unless first we dream.",
    author: "Carl Sandburg",
  },

  {
    text: "Only a life lived for others is a life worthwhile.",
    author: "Albert Einstein",
  },
];

function Card() {
  const [allText, setAllText] = useState("");
  const [allAuthor, setAllAuthor] = useState("");

  useEffect(() => {
    setAllText(generateQuote.text);
    setAllAuthor(generateQuote.author);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateNumber = Math.floor(Math.random() * allQuotes.length);
  const generateQuote = allQuotes[generateNumber];

  const handleClick = () => {
    setAllText(generateQuote.text);
    setAllAuthor(generateQuote.author);
  };

  return (
    <div className="card">
      <div className="card_container">
        <p>{allText}</p>
        <br />
        <p>
          <b>By: {allAuthor}</b>
        </p>
        <button onClick={handleClick}>Click me!</button>
      </div>
    </div>
  );
}

export default Card;
