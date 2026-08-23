import React from 'react';

export function Toast({ message }) {
  if (!message) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        background: '#16181d',
        color: '#ffffff',
        padding: '12px 20px',
        borderRadius: '9px',
        boxShadow: '0 10px 26px rgba(0, 0, 0, 0.25)',
        font: '600 13.5px/1.4 var(--ui), sans-serif',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        animation: 'fadeIn 0.2s ease-in-out'
      }}
    >
      <span
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: '#0e4fff'
        }}
      />
      {message}
    </div>
  );
}
