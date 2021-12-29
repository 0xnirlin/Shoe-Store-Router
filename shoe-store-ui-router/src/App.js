import logo from './logo.svg';
import './App.css';
import { Route, Routes, Outlet } from 'react-router-dom';
import { Home } from './Components/Home';
// import {  Outlet } from "react-router-dom";

import { Appbar } from './Components/Appbar';
import { Products } from './Components/Products';
import { ProductIndex } from './Components/ProductIndex';
import { ProductDetail } from './Components/ProductDetail';

function App() {
  return (
    <div className="App">
     <Appbar ></Appbar>
        <Routes>
          <Route path = "/" element = {<Home></Home>}></Route>
          <Route path = "products" element = {<Products></Products>}>
            <Route path = "" element = {<ProductIndex></ProductIndex>}></Route>
            <Route path = ":productID" element = {<ProductDetail></ProductDetail>}></Route>
          </Route>
  

        </Routes>
    </div>
  );
}

export default App;
