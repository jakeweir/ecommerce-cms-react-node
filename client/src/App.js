import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Orders from './components/Orders';
import Customers from './components/Customers';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import Media from './components/Media';
import Analytics from './components/Analytics';
{/* Import app components */ }

function App() {
  return (
    <div className="app-container">
      <Navbar />

      {/* Content Area: display according to URL */}
      <Switch>
        <Route exact path="/" children={<Dashboard />} />
        <Route path="/orders" children={<Orders />} />
        <Route path="/customers" children={<Customers />} />
        <Route path="/products" children={<Products />} />
        <Route path="/product/:id" children={<SingleProduct />} />
        <Route path="/media" children={<Media />} />
        <Route path="/analytics" children={<Analytics />} />
      </Switch>

      <Sidebar />

    </div>
  );
}

export default App;


