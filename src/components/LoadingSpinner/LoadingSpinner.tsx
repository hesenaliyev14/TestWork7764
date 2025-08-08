import styles from './LoadingSpinner.module.scss';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
}

export const LoadingSpinner = ({ size = 'medium' }: LoadingSpinnerProps) => {
  return (
    <div className={`${styles.spinner} ${styles[size]}`}>
      <div className={styles.spinnerInner}></div>
    </div>
  );
};
