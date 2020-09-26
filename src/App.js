import React, {useEffect} from 'react';
import Header from './components/Header/Header'
import './App.css';
import catalog from './catalog.json'

function App() {

  useEffect( () => {
console.log(catalog)
  }, []);

  return (
    <div className="App">
       <Header />
       <main>
         <h2>Catalog</h2>
         <ul>
         { catalog.products.map( (product,index) => {
               return <li key={index}>{product.name}</li>
             })
          } 
         </ul>
       </main>
    </div>
  );
}

export default App;
