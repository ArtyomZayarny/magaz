import React, {useEffect} from 'react';
import Header from './components/Header/Header'
import './App.css';
import Catalog from './components/Catalog/Catalog';
import catalog from './catalog.json';
import { useDispatch, useSelector } from 'react-redux';
import {getProducts} from './redux/store';
import ForbiddenPage from './Pages/ForbiddenPage';
import AddProductPage from './Pages/AddProductPage';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const LS = localStorage;

function App() {

  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const role     = useSelector(state => state.role);

  useEffect( () => {
      if (products.length === 0) {
          dispatch(getProducts({products:catalog.products}))
      }
  }, []);

 const addProductLS = (product) => {
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
                  {role === 'admin' ? <AddProductPage addProductLS={addProductLS}/> : <ForbiddenPage /> }
            </Route>
            <Route path="/">
                <Catalog />
            </Route>
          </Switch> 
        </main>
      </Router>
    </div>
  );
}

export default App;
