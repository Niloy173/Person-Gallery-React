
import { BrowserRouter, Route, Routes } from "react-router-dom";
// components
import Header from "./components/Header";


//pages
import Cart from './pages/Cart';
import Home from "./pages/Home";
import Message from './pages/Message';

// css files

import './pages/Cart.css';
import './pages/filters.css';
import './pages/header.css';
import './pages/home.css';

function App() {
  return (
   
    <BrowserRouter>
    
      <Header/>
      <div>
        <Routes>
          
        

            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
          
            <Route path="*" element={<Message/>} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
