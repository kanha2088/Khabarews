// src/Card.js
import React, { useState } from 'react';
import './Card.css';

const Card = ({ save, setsave }) => {
  const [saveditems, setitems] = useState(save);

  function deletesave(index) {
    const newsaveditems = saveditems.filter((_, i) => i !== index);
    setitems(newsaveditems);
    setsave(newsaveditems);
  }

  return (
    <div className="scards">
      <div><h1>Saved Items-{save.length}</h1></div>
      {saveditems.map((save, index) => (
        <div className="scard" key={index}>
          <h3>{save.title}</h3>
          <p>{save.description}</p>
          <a href={save.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
          <button onClick={() => deletesave(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Card;
