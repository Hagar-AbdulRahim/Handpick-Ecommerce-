import React, { useEffect, useState } from 'react';
import { FaCartPlus, FaShare, FaStar } from 'react-icons/fa6';
import { IoStarSharp } from 'react-icons/io5';
import { MdFavoriteBorder } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import '../components/header/productDetails/productDetails.css';
import { ProductSlide } from '../components/header/homecomponents/slide product/ProductSlide';
import ProductDetailsLoading from '../components/header/productDetails/ProductDetailsLoading';

export const ProductDetails = () => {
  const { id } = useParams();

  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [img, setImg] = useState('');
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [LoadingrelatedProducts, SetLoadingRelatedProducts] = useState(true);

  // بجيب تفاصيل المنتج ب  p_ID
  useEffect(() => {
    const fetchproduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);

        if (!res.ok) {
          throw new Error('Failed to fetch product');
        }

        const data = await res.json();
        setProductDetails(data);
        setImg(data?.images?.[0]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchproduct();
  }, [id]);

  // console.log(productDetails);

  useEffect(() => {
    if (!productDetails?.category) return;
    else {
      fetch(
        `https://dummyjson.com/products/category/${productDetails.category}`
      )
        .then((res) => res.json())
        .then((data) => setRelatedProducts(data.products))
        .catch((err) =>
          console.log(`Failed to catch the Related Products ${err}`)
        )
        .finally(() => SetLoadingRelatedProducts(false));
    }
  }, [productDetails?.category]);
  console.log(relatedProducts);
  // 1. Loading
  if (loading) {
    <ProductDetailsLoading />;
  }

  // 2. Error
  if (error) {
    return <p className='text-center'>{error}</p>;
  }

  // 3. Not found validation
  if (!productDetails || productDetails.message) {
    return <p className='text-center'>Product Not Found</p>;
  }

  // 4. UI
  return (
    <>
      <div className='item_details'>
        <div className='container'>
          <div className='product_wrapper'>
            {/* Images Section */}
            <div className='imgs_item'>
              <div className='big_img' id='bigImg'>
                <img src={img} alt={productDetails?.title} />
              </div>

              <div className='sm_img'>
                {productDetails?.images?.map((img, index) => (
                  <img
                    key={index}
                    className='sm'
                    src={img}
                    alt={`product-${index}`}
                    onClick={() => setImg(img)}
                  />
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className='product_info'>
              <h1 className='title'>{productDetails?.title}</h1>
              {/* Rating */}
              <div className='rating'>
                {[...Array(Math.round(productDetails.rating))].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              {/* Price */}
              <h2 className='price'>${productDetails?.price}</h2>
              {/* Availability */}
              <div className='stock'>
                Availability:{' '}
                <strong>
                  {productDetails?.stock > 0 ? 'In Stock' : 'Out of Stock'}
                </strong>
              </div>
              {/* Brand */}
              Brand: <strong className='brand'>{productDetails?.brand}</strong>
              {/* Description */}
              <p className='description'>{productDetails?.description}</p>
              {/* Stock warning */}
              {productDetails?.stock > 0 && (
                <p className='alert'>
                  Hurry Up! Only {productDetails?.stock} products left in stock.
                </p>
              )}
              {/* Actions */}
              <div className='actions d-flex gap-2 flex-row   '>
                <button className='add_to_cart btn'>Add To Cart</button>

                <div className='icons d-flex gap-2       '>
                  <span className='icon2'>
                    <MdFavoriteBorder />
                  </span>
                  <span className='icon3'>
                    <FaShare />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='related_products'>
        {LoadingrelatedProducts ? (
          <p>Loading...</p>
        ) : (
          <ProductSlide
            key={productDetails.category}
            title={productDetails?.category.replace('-', ' ')}
            data={relatedProducts}
          />
        )}
      </div>
    </>
  );
};
