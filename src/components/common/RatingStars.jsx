import React from 'react';

export function RatingStars({ rating, onRate }) {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {[1, 2, 3, 4, 5].map((num) => {
        const active = num <= rating;
        return (
          <span
            key={num}
            onClick={() => onRate && onRate(num)}
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '9px',
              border: active ? 'none' : '1px solid rgba(22, 24, 29, 0.14)',
              background: active ? '#0e4fff' : 'transparent',
              color: active ? '#ffffff' : '#16181d',
              display: 'grid',
              placeItems: 'center',
              font: '700 16px/1 var(--ui), sans-serif',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            {num}
          </span>
        );
      })}
    </div>
  );
}
