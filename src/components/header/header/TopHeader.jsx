import React, { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaCartPlus } from 'react-icons/fa';

import { FaRegHeart } from 'react-icons/fa';
import './headerStyle.css';

import Logo from '../../../../React Ecommerce Reda Tech/headerImages/Logo.svg';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
export const TopHeader = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <>
      <div className='top_header '>
        <div className='container'>
          <Link to='/'>
            <img className='logo' src={Logo} alt='LOGO' />
          </Link>
          <form action='' className='search_box'>
            <input
              type='text'
              name='search'
              id='search'
              placeholder='Search For Product'
            />
            <button type='submit'>
              {' '}
              <FiSearch />
            </button>
          </form>
          <div className='header_icon'>
            <Link to='/cart'>
              {' '}
              <div className='icon '>
                {' '}
                <FaCartPlus />
                <span className='count'>{cartItems.length}</span>
              </div>
            </Link>
            <div className='icon'>
              {' '}
              <FaRegHeart />
              <span className='count'>0</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
