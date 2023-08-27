import React from 'react';
import Game from './Game';
import Pagination from './Pagination';
import './css/Catalog.css'; 

// IMAGENES
import pokemon from './img/pokemon.jpg';
import lol from './img/lol.png';
import mh from './img/mh.jpg';
import cs from './img/cs.jpg';
import go from './img/go.png';
import ov from './img/ov.png';
import nikke from './img/nikke.jpg';
import mario from './img/mario.png';

const Catalog = () => {
  return (
    <section className="catalog">
      <Game
        imageUrl={lol}
        alt="lol"
        title="League of Legends"
        price="$19.99"
        oldprice="$30.00"
        description="Description for Game"
      />
      <Game
        imageUrl={pokemon}
        alt="Pokemon"
        title="Pokemon Unite"
        price="$12.99"
        description="Description for Game"
      />
      <Game
        imageUrl={mh}
        alt="mh"
        title="Monster Hunter"
        price="$30.99"
        oldprice="$40.00"
        description="Description for Game"
      />
      <Game
        imageUrl={cs}
        alt="cs"
        title="Counter Strike"
        price="$9.99"
        description="Description for Game"
      />
      <Game
        imageUrl={go}
        alt="go"
        title="Pokemon Go"
        price="$6.00"
        oldprice="$8.00"
        description="Description for Game"
      />
      <Game
        imageUrl={ov}
        alt="ov"
        title="Overwatch "
        price="$30.99"
        description="Description for Game"
      />
      <Game
        imageUrl={nikke}
        alt="nikke"
        title="GODDESS OF VICTORY: NIKKE"
        price="$49.99"
        description="Description for Game"
      />
      <Game
        imageUrl={mario}
        alt="mario"
        title="Super Mario 3"
        price="$4.99"
        oldprice="$8.00"
        description="Description for Game"
      />
      <Pagination />
    </section> 
  );
}

export default Catalog;
