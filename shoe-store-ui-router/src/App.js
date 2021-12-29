import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { Appbar } from './Components/Appbar';
import { Products } from './Components/Products';

function App() {
  return (
    <div className="App">
     <Appbar ></Appbar>
        <Routes>
          <Route path = "/" element = {<Home></Home>}></Route>
          <Route path = "products" element = {<Products></Products>}></Route>

        </Routes>
    </div>
  );
}

export default App;
