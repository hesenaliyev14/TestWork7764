import { useState, useCallback } from 'react';

interface ValidationRules {
  required?: boolean;
  minLength?: number;
}

interface ValidationErrors {
  [key: string]: string;
}

export const useValidation = () => {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateField = useCallback((
    value: string,
    fieldName: string,
    rules: ValidationRules
  ): string => {
    if (rules.required && !value.trim()) {
      return `${fieldName} is required`;
    }

    if (rules.minLength && value.length < rules.minLength) {
      return `${fieldName} must be at least ${rules.minLength} characters`;
    }

    return '';
  }, []);

  const validateForm = useCallback((
    data: { [key: string]: string },
    rules: { [key: string]: ValidationRules }
  ): boolean => {
    const newErrors: ValidationErrors = {};

    Object.keys(rules).forEach(fieldName => {
      const fieldValue = data[fieldName] || '';
      const fieldRules = rules[fieldName];
      const error = validateField(fieldValue, fieldName, fieldRules);

      if (error) {
        newErrors[fieldName] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [validateField]);

  const clearErrors = useCallback(() => {
    setErrors({});
  }, []);

  return {
    errors,
    validateForm,
    clearErrors,
  };
};
