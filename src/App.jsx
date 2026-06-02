import { Route, Routes } from 'react-router-dom';
import { HeaderLayOut } from './pages/HeaderLayOut';
import { Home } from './pages/Home';
import { ProductDetails } from './pages/ProductDetails';
import { CartPage } from './pages/cart/CartPage';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <>
      <Toaster
        position='bottom-right'
        toastOptions={{
          style: {
            padding: '0',
            margin: '0',
            background: 'transparent',
            boxShadow: 'none',
            maxWidth: '240px',
          },
        }}
      />{' '}
      <Routes>
        <Route path='/' element={<HeaderLayOut />}>
          <Route index element={<Home />} />
          <Route path='products/:id' element={<ProductDetails />} />
          <Route path='cart' element={<CartPage />} />
        </Route>
      </Routes>
    </>
  );
};
