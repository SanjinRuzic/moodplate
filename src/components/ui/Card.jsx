export const CardComponent = `
import React from 'react';

const Card = ({ 
  children, 
  hover = false, 
  interactive = false,
  className = '',
  ...props 
}) => {
  const baseClass = hover ? 'card-hover' : 'card';
  const interactiveClass = interactive ? 'card-interactive' : '';
  
  return (
    <div 
      className={\`\${baseClass} \${interactiveClass} \${className}\`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
`;