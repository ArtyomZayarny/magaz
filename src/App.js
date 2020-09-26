import React from 'react';
import Header from './components/Header/Header'
import './App.css';
import Catalog from './components/Catalog/Catalog';
import AddProductPage from './Pages/AddProductPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        < Header />
        <main>
          <Switch>
            <Route path="/add">
                <AddProductPage />
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
