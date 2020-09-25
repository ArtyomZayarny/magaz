import React, {useEffect} from 'react';
import logo from './logo-os.png'
import './App.css';
import catalog from './catalog.json'

function App() {

  useEffect( () => {
console.log(catalog)
  }, []);

  return (
    <div className="App">
       <header className="">
         <div className="logo">
           <img src={logo} alt="logo"/>
         </div>
       </header>
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
