'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { useValidation } from '@/hooks/useValidation';
import { LoadingSpinner } from '@/components/LoadingSpinner/LoadingSpinner';
import styles from './login.module.scss';

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoading, error, isAuthenticated, clearError } =
    useAuthStore();
  const { errors, validateForm, clearErrors } = useValidation();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    clearErrors();

    const validationRules = {
      username: { required: true, minLength: 3 },
      password: { required: true, minLength: 3 },
    };

    if (validateForm(formData, validationRules)) {
      await login(formData.username, formData.password);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <h1 className={styles.title}>Login</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="username" className={styles.label}>
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className={`${styles.input} ${errors.username ? styles.error : ''}`}
              placeholder="Enter your username"
            />
            {errors.username && (
              <span className={styles.errorText}>{errors.username}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`${styles.input} ${errors.password ? styles.error : ''}`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <span className={styles.errorText}>{errors.password}</span>
            )}
          </div>

          {error && <div className={styles.apiError}>{error}</div>}

          <button
            type="submit"
            disabled={isLoading}
            className={styles.submitBtn}
          >
            {isLoading ? (
              <div className={styles.loadingContainer}>
                <LoadingSpinner size="small" />
                <span>Logging in...</span>
              </div>
            ) : (
              'Login'
            )}
          </button>
        </form>

        <div className={styles.demoInfo}>
          <p>Demo credentials:</p>
          <p>
            Username: <strong>emilys</strong>
          </p>
          <p>
            Password: <strong>emilyspass</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
