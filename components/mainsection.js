'use client';
import React from 'react';
import styles from './mainsection.module.css';
import Image from 'next/image';
import { useCart } from '../app/context/CartContext'; 

const products = [
  { name: 'Running Shoes', price: 99, img: '/product-images/shoes.webp' },
  { name: 'Wireless Headphones', price: 149, img: '/product-images/headphones.jpg' },
  { name: 'Backpack', price: 129, img: '/product-images/backpack.jpg' },
  { name: 'Smartwatch', price: 249, img: '/product-images/watch.jpg' },
  { name: 'Sunglasses', price: 149, img: '/product-images/sunglasses.jpg' },
  { name: 'Digital Camera', price: 499, img: '/product-images/camera.jpg' },
  { name: 'T-shirt', price: 29, img: '/product-images/tshirt.jpg' },
];

const MainSection = () => {
  const { addToCart } = useCart(); 

  return (
    <div className={styles.container}>
      
     
      <aside className={styles.sidebar}>
        <h3>Filters</h3>

        <div className={styles.section}>
          <p><strong>Category</strong></p>
          <label><input type="radio" name="category" /> All</label>
          <label><input type="radio" name="category" /> Electronics</label>
          <label><input type="radio" name="category" /> Clothing</label>
          <label><input type="radio" name="category" /> Home</label>
        </div>

        <div className={styles.section}>
          <p><strong>Price</strong></p>
          <input type="range" min="0" max="1000" />
        </div>

        <div className={styles.section}>
          <p><strong>Brand</strong></p>
          <label><input type="radio" name="brand" /> All</label>
          <label><input type="radio" name="brand" /> Electronics</label>
          <label><input type="radio" name="brand" /> Clothing</label>
          <label><input type="radio" name="brand" /> Home</label>
        </div>

        <div className={styles.section}>
          <p><strong>Price</strong></p>
          <input type="number" defaultValue="5000" />
        </div>
      </aside>

     
      <section className={styles.main}>
        <h2 className={styles.heading}>Product Listing</h2>

        
        <div className={styles.grid}>
          {products.map((product, i) => (
            <div className={styles.card} key={i}>
              <Image
                src={product.img}
                alt={product.name}
                width={150}
                height={150}
                className={styles.image}
              />
              <h4>{product.name}</h4>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>

        
        <div className={styles.details}>
          <Image
            src="/product-images/smartphone.jpg"
            alt="Smartphone"
            width={200}
            height={200}
          />
          <div className={styles.info}>
            <h3>Smartphone</h3>
            <p className={styles.price}>$699</p>
            <p>⭐⭐⭐⭐☆</p>
            <p>Lorem ipsum dolor amet, consectetur eiusagend.</p>
            <p><strong>Category:</strong> Electronics</p>

            <div className={styles.quantityRow}>
              <label htmlFor="quantity"><strong>Quantity:</strong></label>
              <input
                id="quantity"
                type="number"
                min="1"
                defaultValue="1"
                className={styles.quantityInput}
              />
            </div>

            <button className={styles.detailCartButton} onClick={() => addToCart({ name: 'Smartphone', price: 699 })}>
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSection;
