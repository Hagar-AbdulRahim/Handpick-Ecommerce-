import React from 'react';
import './ProductDetailsLoading.css';
function ProductDetailsLoading() {
  return (
    <div className='loading_Item'>
      <div className='item_details'>
        <div className='container'>
          {/* صورة المنتج */}
          <div className='imgs_item skeltion'></div>

          {/* تفاصيل المنتج */}
          <div className='details_item'>
            <h5 className='loading_TextDetailsItem skeltion'></h5>
            <h5 className='loading_TextDetailsItem skeltion'></h5>
            <h5 className='loading_TextDetailsItem skeltion'></h5>
            <h5 className='loading_TextDetailsItem skeltion'></h5>
            <h5 className='loading_TextDetailsItem skeltion'></h5>
            <h5 className='loading_TextDetailsItem skeltion'></h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsLoading;
