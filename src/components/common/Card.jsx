import React from 'react';

export function Card({ children, style = {}, className = '', onClick, hoverEffect = false }) {
  const cardStyle = {
    background: '#ffffff',
    border: '1px solid rgba(22, 24, 29, 0.12)',
    borderRadius: '10px',
    padding: '24px 26px',
    cursor: onClick ? 'pointer' : 'default',
    transition: hoverEffect ? 'border-color 0.15s ease, background-color 0.15s ease' : 'none',
    ...style
  };

  const handleMouseEnter = (e) => {
    if (hoverEffect || onClick) {
      e.currentTarget.style.borderColor = '#0e4fff';
    }
  };

  const handleMouseLeave = (e) => {
    if (hoverEffect || onClick) {
      e.currentTarget.style.borderColor = style.border || 'rgba(22, 24, 29, 0.12)';
    }
  };

  return (
    <article
      style={cardStyle}
      className={className}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </article>
  );
}
