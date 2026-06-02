// import React from 'react';
import { IoStarSharp } from 'react-icons/io5';
import { IoIosStarHalf } from 'react-icons/io';
import { FaCartPlus, FaShare } from 'react-icons/fa';
import { MdFavoriteBorder } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../context/cartContext';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import toast from 'react-hot-toast';

const ProductCollection = ({ item }) => {
  const navigat = useNavigate();
  const { cartItems, addToCart } = useContext(CartContext);
  const ItemIsInCart = cartItems.find((i) => i.id === item.id);
  const handleaddToCart = () => {
    addToCart(item);

    toast.custom(
      (t) => (
        <div className='toast-wrapper'>
          <img className='toast-img' src={item.images[0]} alt='product image' />
          <div className='toast-content'>
            <strong>{item.title}</strong>
            <p>Added To Cart Successfully!</p>
          </div>
          <button
            className='toast-view-btn'
            onClick={() => {
              navigat('/cart');
              toast.dismiss(t.id);
            }}
          >
            View Cart
          </button>
        </div>
      ),
      { duration: 3000 }
    );
  };
  return (
    <div className='container rounded-1'>
      <div className={`slideContainer   ${ItemIsInCart ? 'incart' : ''} `}>
        <Link to={`/products/${item.id}`}>
          {ItemIsInCart && (
            <span className='cartSuccessffully incart'>
              <strong>in cart</strong>
              <IoCheckmarkDoneCircle />
            </span>
          )}

          <div className='imgContainer '>
            <img src={item.images[0]} alt='Smart Phone' />
          </div>
          <h3 className='ProductTitle'>{item.title} </h3>

          <div className='stars m-3 d-flex gap-2'>
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoIosStarHalf />
          </div>
          <p className='price m-3 mb-3'>{item.price}</p>
        </Link>
        <div className='icons d-flex gap-2 flex-column position-absolute top-l'>
          <span className='icon1 incart' onClick={() => handleaddToCart(item)}>
            <FaCartPlus />
          </span>
          <span className='icon2'>
            <MdFavoriteBorder />
          </span>
          <span className='icon3'>
            <FaShare />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCollection;
