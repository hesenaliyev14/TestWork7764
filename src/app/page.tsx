'use client';

import { useEffect } from 'react';
import { useProductsStore } from '@/store/productsStore';
import { ProductCard } from '@/components/ProductCard/ProductCard';
import { LoadingSpinner } from '@/components/LoadingSpinner/LoadingSpinner';
import { ErrorMessage } from '@/components/ErrorMessage/ErrorMessage';
import styles from './page.module.scss';

export default function HomePage() {
  const { products, isLoading, error, fetchProducts, clearError } =
    useProductsStore();

  useEffect(() => {
    fetchProducts(12);
  }, [fetchProducts]);

  const handleRetry = () => {
    clearError();
    fetchProducts(12);
  };

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <LoadingSpinner size="large" />
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <ErrorMessage message={error} onRetry={handleRetry} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Our Products</h1>
        <p className={styles.subtitle}>
          Discover amazing products at great prices
        </p>
      </div>

      <div className={styles.productsGrid}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === 0 && !isLoading && !error && (
        <div className={styles.emptyState}>
          <p>No products found</p>
        </div>
      )}
    </div>
  );
}
