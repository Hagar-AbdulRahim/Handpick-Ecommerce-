import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { BsFillTrash3Fill } from 'react-icons/bs';
import './cart.css';

export const Cart = () => {
  const { removeFromCart, cartItems, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);
  const total = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.quantity || 1),
    0
  );
  console.log('TOTAL:', total);
  console.log('TYPE:', typeof total);
  console.log('CART:', cartItems);
  return (
    <div className='checkout'>
      <div className='ordersummary'>
        <h1>Order Summary</h1>

        <div className='items'>
          {cartItems.length === 0 ? (
            <p>Your Cart Is Empty</p>
          ) : (
            cartItems.map((item, index) => (
              <div className='item_cart' key={index}>
                <div className='image_name'>
                  <div className='img_item'>
                    <img src={item.images[0]} alt='' />
                  </div>

                  <div className='content'>
                    <h4>{item.title}</h4>
                    <p className='price'>${item.price}</p>

                    <div className='quantity_control'>
                      <button onClick={() => increaseQuantity(item.id)}>
                        +
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => decreaseQuantity(item.id)}>
                        -
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  className='delete_item'
                  onClick={() => removeFromCart(item.id)}
                >
                  <BsFillTrash3Fill />
                </button>
              </div>
            ))
          )}
        </div>

        <div className='bottom_summary'>
          <div className='shop_table'>
            <p>Total:</p>
            <span className='total_checkout'>${total.toFixed(2)}</span>
          </div>

          <div className='button_div'>
            <button type='submit'>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};
