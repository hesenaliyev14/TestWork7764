import styles from './ErrorMessage.module.scss';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export const ErrorMessage = ({ message, onRetry }: ErrorMessageProps) => {
  return (
    <div className={styles.error}>
      <div className={styles.errorContent}>
        <p className={styles.errorText}>{message}</p>
        {onRetry && (
          <button onClick={onRetry} className={styles.retryBtn}>
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};
