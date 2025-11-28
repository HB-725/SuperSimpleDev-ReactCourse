import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage.jsx';
import { CheckoutPage } from './pages/CheckoutPage.jsx';
import { OrdersPage } from './pages/OrdersPage.jsx';
import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [cart, setCart] = useState([]);

  useEffect(() => {

    axios.get('/api/cart-items?expand=product')
      .then((response) => {
        setCart(response.data);
      });
  }, []);


  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="tracking" element={<OrdersPage />} />
    </Routes>
  )
}

export default App
