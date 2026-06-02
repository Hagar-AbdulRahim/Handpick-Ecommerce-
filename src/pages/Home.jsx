import React, { useEffect, useState } from 'react';
import { HeroSlider } from '../components/header/homecomponents/HeroSlider';
import { ProductSlide } from '../components/header/homecomponents/slide product/ProductSlide';
import ProductSlideLoading from '../components/header/homecomponents/slide product/ProductSlideLoading';

export const Home = () => {
  const category = [
    'beauty',
    'fragrances',
    'furniture',
    'groceries',
    'home-decoration',
    'kitchen-accessories',
    'laptops',
    'mens-shirts',
    'mens-shoes',
    'mens-watches',
    'mobile-accessories',
    'motorcycle',
    'skin-care',
    'smartphones',
    'sports-accessories',
    'sunglasses',
    'tablets',
    'tops',
    'vehicle',
    'womens-bags',
    'womens-dresses',
    'womens-jewellery',
    'womens-shoes',
    'womens-watches',
  ];

  const [product, setProductData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const CACHE_KEY = 'home_products_cache_v1';

    const getProduct = async () => {
      try {
        // =========================
        // 1. CHECK CACHE FIRST
        // =========================
        const cached = localStorage.getItem(CACHE_KEY);

        if (cached) {
          const parsed = JSON.parse(cached);
          setProductData(parsed);
          setLoading(false);
          return;
        }

        // =========================
        // 2. FETCH DATA (SAFE MODE)
        // =========================
        const result = [];

        for (const cat of category) {
          try {
            const res = await fetch(
              `https://dummyjson.com/products/category/${encodeURIComponent(cat)}`
            );

            const data = await res.json();

            result.push({
              [cat]: data.products || [],
            });

            // ⛔ مهم جدًا: تهدئة السيرفر (anti 429)
            await new Promise((r) => setTimeout(r, 250));
          } catch (err) {
            console.log(`Category failed: ${cat}`, err);
            result.push({ [cat]: [] });
          }
        }

        // =========================
        // 3. MERGE DATA
        // =========================
        const productData = Object.assign({}, ...result);

        setProductData(productData);

        // =========================
        // 4. SAVE CACHE
        // =========================
        localStorage.setItem(CACHE_KEY, JSON.stringify(productData));
      } catch (err) {
        console.log(`Failed with Error: ${err}`);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, []);

  return (
    <>
      <HeroSlider />

      {loading ? (
        <ProductSlideLoading />
      ) : (
        category.map((cat, index) => (
          <ProductSlide
            key={index}
            title={cat.split('-').join(' ')}
            data={product?.[cat] || []}
          />
        ))
      )}
    </>
  );
};
