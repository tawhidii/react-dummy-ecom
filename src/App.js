import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {BrowserRouter as Router,
          Switch,
          Route,
        } from 'react-router-dom'
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound404 from './components/404/NotFound404';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {
  const [userLoggedin,setUserLogin] = useState({})
  console.log(userLoggedin)
  return (
    <UserContext.Provider value={[userLoggedin,setUserLogin]}>
      <h1>{userLoggedin.email}</h1>
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/shop">
          <Shop></Shop>
          </Route>

          <Route path="/review">
          <Review></Review>
          </Route>
          
          <PrivateRoute path="/inventory">
          <Inventory></Inventory>
          </PrivateRoute>

          <Route exact path="/"> 
          <Shop></Shop>
          </Route>

          <Route path="/product/:productkey"> 
          <ProductDetail></ProductDetail>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <PrivateRoute path="/shipment">
            <Shipment/>
          </PrivateRoute>

          <Route path="*">
          <NotFound404></NotFound404>
          </Route>
  
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
