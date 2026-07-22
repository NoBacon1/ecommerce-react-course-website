
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import Navbar from './components/Navbar';
import ProductDetails from "./pages/ProductDetails";

import './App.css'
import AuthProvider from './context/AuthContext';

function App() {

  return (
    <AuthProvider>
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/:id" element={<ProductDetails />} /> {/** Created a param for the API */}
      </Routes>
    </div>
    </AuthProvider>
  );
}

export default App
