'use client';

import { useAuthStore } from '@/store/authStore';
import styles from './Footer.module.scss';

export const Footer = () => {
  const { user, isAuthenticated } = useAuthStore();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.year}>© {currentYear}</span>
          {isAuthenticated && user && (
            <span className={styles.userEmail}>Logged as {user.email}</span>
          )}
        </div>
      </div>
    </footer>
  );
};
