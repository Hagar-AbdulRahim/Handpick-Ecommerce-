import React from 'react';
import './ProductSlideLoading.css';
function SlideProductLoading() {
  return (
    <div className='loading_SlideProduct'>
      <div className='slide_products slide'>
        <div className='container d-flex'>
          {/* بنعمل 8 كروت loading */}
          {[...Array(8)].map((_, i) => (
            <div key={i} className='top_slide'>
              <h2 className='skeltion'></h2>
              <p className='skeltion'></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SlideProductLoading;
