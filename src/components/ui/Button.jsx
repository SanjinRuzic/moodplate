export const ButtonComponent = `
import React from 'react';
import { Loader2 } from 'lucide-react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  loading = false,
  disabled = false,
  icon: Icon,
  iconPosition = 'right',
  className = '',
  ...props 
}) => {
  const baseStyles = 'btn';
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
    outlineLight: 'btn-outline-light',
  };
  
  const sizes = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg',
  };
  
  return (
    <button
      className={\`\${baseStyles} \${variants[variant]} \${sizes[size]} \${className}\`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="w-5 h-5 mr-2" />}
          {children}
          {Icon && iconPosition === 'right' && <Icon className="w-5 h-5 ml-2" />}
        </>
      )}
    </button>
  );
};

export default Button;
`;