import React from 'react';

export function Badge({ children, variant = 'default', dot = false, dotColor, style = {}, className = '' }) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'blue':
      case 'in-progress':
        return { bg: '#eef3ff', color: '#0930a0', dotBg: '#0e4fff' };
      case 'amber':
      case 'awaiting':
      case 'reserved':
        return { bg: '#fff4e3', color: '#8a4b00', dotBg: '#e07b00' };
      case 'green':
      case 'completed':
      case 'paid':
      case 'available':
        return { bg: '#e6f2ee', color: '#12735a', dotBg: '#12735a' };
      case 'grey':
      case 'idle':
        return { bg: '#f1f2f4', color: 'rgba(22, 24, 29, 0.6)', dotBg: 'rgba(22, 24, 29, 0.35)' };
      case 'dark':
        return { bg: '#16181d', color: '#ffffff', dotBg: '#ffffff' };
      default:
        return { bg: '#eef3ff', color: '#0930a0', dotBg: '#0e4fff' };
    }
  };

  const styles = getVariantStyles();

  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        height: '28px',
        padding: '0 10px',
        borderRadius: '6px',
        background: styles.bg,
        color: styles.color,
        font: '700 12px/1 var(--ui), sans-serif',
        letterSpacing: '0.01em',
        whiteSpace: 'nowrap',
        ...style
      }}
    >
      {dot && (
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: dotColor || styles.dotBg
          }}
        />
      )}
      {children}
    </span>
  );
}
