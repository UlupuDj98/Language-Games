import React from 'react';
import '../Styles/CardLang.css'

const CardLang = ({ languageImage, languageName , onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img className="card-img-top" src={languageImage} alt="Card image cap" />
      <div className="card-body">
        <p className="card-text">{languageName}</p>
      </div>
    </div>
  );
}

export default CardLang;
