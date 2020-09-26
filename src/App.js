import React from 'react';
import Header from './components/Header/Header'
import './App.css';
import Catalog from './components/Catalog/Catalog';

function App() {

  return (
    <div className="App">
        <Header />
       <main>
          <Catalog />
       </main>
    </div>
  );
}

export default App;
