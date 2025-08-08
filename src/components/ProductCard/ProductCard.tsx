'use client';

import Image from 'next/image';
import { Product } from '@/types';
import { useAuthStore } from '@/store/authStore';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { isAuthenticated } = useAuthStore();

  const handleAddToCart = () => {
    console.log('Add to cart:', product.id);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.category}>{product.category}</p>
        <div className={styles.priceContainer}>
          <span className={styles.price}>${product.price}</span>
          {product.discountPercentage > 0 && (
            <span className={styles.discount}>
              -{product.discountPercentage.toFixed(0)}%
            </span>
          )}
        </div>

        {isAuthenticated && (
          <button onClick={handleAddToCart} className={styles.addToCartBtn}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};
