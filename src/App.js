import React from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import Catalog from './components/Catalog';
import Footer from './components/Footer';
import './components/css/global.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Filters />
        <Catalog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
