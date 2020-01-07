import React from 'react';
import Homepage from './component/homepage-component';
import './App.css';
import { Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop-component'
import Header from './component/header/header-component'
import SigInAndSignUpPage from './pages/sign-in and sig-up/sign-in and sig-up'



function App() {
  return (
    <div >
    <Header/>
    <Route exact path='/' component={Homepage}/>
    <Route exact path='/shop' component={ShopPage}/>
    <Route exact path='/Sigin' component={SigInAndSignUpPage}/>
      
    </div>
  );
}

export default App;
