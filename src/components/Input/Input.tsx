import type { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export function Input({ label, error, className, id, ...props }: InputProps) {
  const inputClasses = [styles.input, error && styles.hasError, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={styles.field}>
      {label && <label htmlFor={id} className={styles.label}>{label}</label>}
      <input id={id} className={inputClasses} {...props} />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}