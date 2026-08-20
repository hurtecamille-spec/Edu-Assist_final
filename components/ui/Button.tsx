import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'cosmic' | 'rainbow' | 'boring';
}

export default function MagicButton({ variant = 'cosmic', children, onClick, ...props }: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked! A unicorn somewhere just neighed.');
    if (onClick) onClick(e);
  };

  const getStyle = () => {
    switch (variant) {
      case 'rainbow': return { background: 'linear-gradient(to right, red, orange, yellow, green, blue, purple)', color: 'white' };
      case 'boring': return { backgroundColor: 'gray', color: 'black' };
      default: return { backgroundColor: '#39ff14', color: '#4a0e4e', fontWeight: 'bold' };
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: '12px 24px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        ...getStyle()
      }}
      {...props}
    >
      {children}
    </button>
  );
}
