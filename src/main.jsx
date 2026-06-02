import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App.jsx';
import './index.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './components/context/cartContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
