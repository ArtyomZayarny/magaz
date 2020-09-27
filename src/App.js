import React, {useState, useEffect} from 'react';
import Header from './components/Header/Header'
import './App.css';
import Catalog from './components/Catalog/Catalog';
import AddProductPage from './Pages/AddProductPage';
import catalog from './catalog.json';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const shortid = require('shortid');

const LS = localStorage;

function App() {

  const [data,setData] = useState({
    products:[],
}) 

useEffect( () => {
    
    // if (LS.getItem('products') === null) {
    //     console.log(catalog.products)
    //     LS.setItem('products', JSON.stringify(catalog.products))
    // }
    //Fetch products from LS
   // const products = JSON.parse(LS.getItem('products'));

    if (data.products.length === 0) {
        setData({...data, products:catalog.products})
    }
    

}, []);
const deleteAll = () => setData({...data, products:[]});

const deleteProduct = (id) => {
  setData({...data,products:data.products.filter( product => product.id !== id)})
 
}
const addProduct = (product) => {
    product.id = shortid.generate();
  //First product
  if (LS.getItem('products') === null) {
    const productsList = [];
    productsList.push(product);
    LS.setItem('products',JSON.stringify(productsList));
  } else {
    //Check if ls includes some products
    const products = JSON.parse(LS.getItem('products'));
    //Add new product
    products.push(product);
    //Write to ls updated productslist
    LS.setItem('products', JSON.stringify(products))
  }
 
   
}
  return (
    <div className="App">
      <Router>
        < Header />
        <main>
          <Switch>
            <Route path="/add">
                <AddProductPage addProduct={addProduct}/>
            </Route>
            <Route path="/">
                <Catalog 
                  products={data.products}
                  deleteAll={deleteAll} 
                  deleteProduct={deleteProduct}
                />
            </Route>
          </Switch> 
        </main>
      </Router>
    </div>
  );
}

export default App;
