'use client';

import Link from 'next/link';
import { useAuthStore } from '@/store/authStore';
import styles from './Header.module.scss';

export const Header = () => {
  const { user, isAuthenticated, logout } = useAuthStore();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          E-Commerce
        </Link>

        <nav className={styles.nav}>
          {isAuthenticated && user ? (
            <div className={styles.userInfo}>
              <span className={styles.userName}>
                {user.firstName} {user.lastName}
              </span>
              <button onClick={logout} className={styles.logoutBtn}>
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login" className={styles.loginBtn}>
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};
