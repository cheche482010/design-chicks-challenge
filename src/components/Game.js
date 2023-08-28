import React from 'react';
import './css/Game.css'; 

const Game = ({ imageUrl, title, price, description,oldprice }) => {
  return (
    <div className="game">
      <div className="div-game">
        <div className="sale-status">
        <span className="dot"></span>
          <h3>On sale</h3>
        </div>
        
        <input type="number" name="" id="" min="1" max="valor_maximo" step="1" value="1" />
      </div>
      <p className="stock">In stock</p>
      <div className="image-container-game"> 
        <img alt={title} src={imageUrl} />
      </div>
      <div className="game-description">
        <p>{title}</p>
        <p className="price">
          Precio:
          <span>{price}</span>
          <span className="prices-bad">{oldprice}</span>
        </p>
        <p>{description}</p>
      </div>
      <div className="buttons">
        <button className="details">Details</button>
        <button className="buy">
          Add
          <div className="buy-car">
            <i className="fas fa-shopping-cart"></i>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Game;
